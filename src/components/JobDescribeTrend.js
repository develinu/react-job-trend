import React, { useState, useEffect } from 'react'
import './JobDescribeTrend.scss'
import DateDropdown from './DateDropdown';
import Tab from './Tab'
import AnalysisDescribe from './AnalysisDescribe';
import AnalysisCharts from './AnalysisCharts';
import CustomSpinner from './CustomSpinner'

import { API, graphqlOperation } from 'aws-amplify'
import { getJobDescribes } from '../graphql/queries'
import { format, sub, eachMonthOfInterval } from 'date-fns'
import { getKstDate } from '../utils/date'
import { analysisInfo, jobInfo } from '../data/JobInfo'


const JobDescribeTrend = () => {
  const getEndDate = () => {
    return sub(getKstDate(new Date()), { months: 1 })
  }
  
  const getDateRange = (startDate, endDate) => {
    return eachMonthOfInterval({
      start: startDate,
      end: endDate
    })
  }

  const dateFormat = 'yyyy-MM'
  const startDate = new Date(2021, 6, 1)
  const endDate = getEndDate()
  const dateRange = getDateRange(startDate, endDate)
  const [date, setDate] = useState(format(endDate, dateFormat))
  const [jobAnalyses, setJobAnalyses] = useState([])  
  const [jobAnalysis, setJobAnalysis] = useState({})
  const [job, setJob] = useState(jobInfo[0].name)
  const [isFetch, setIsFetch] = useState(false)

  useEffect(() => {
    console.log(`changed date : ${date}`)
    setIsFetch(true)
    const fetchJdList = async () => {
      const _jds = await API.graphql(graphqlOperation(getJobDescribes, { date: date }))
      setJobAnalyses(_jds?.data?.listJobAnalyses?.items)
    }
    fetchJdList().finally(_ => setIsFetch(false))
  }, [date])

  useEffect(() => {
    console.log(`changed job : ${job}`)
    console.log(jobAnalyses)
    const _jobAnalysis = jobAnalyses.find(e => e.search === job)
    setJobAnalysis(_jobAnalysis ? _jobAnalysis : {})
  }, [jobAnalyses, job])

  return (
    <div className="job-describe-trend">
      <section className="date-filter">
        <DateDropdown dateRange={dateRange} date={date} setDate={setDate}/>
      </section>
      { (() => {        
          if (isFetch) {
            return (
              <section className="empty-content">
                <CustomSpinner />
              </section>
            )
          } else {
            if (jobAnalyses && jobAnalyses.length > 0) {
              return (
                <>
                <section className="job-filter">
                  <Tab jobInfo={jobInfo} setJob={setJob}/>
                </section>
                <section className="job-intro">
                  <AnalysisDescribe jobAnalysis={jobAnalysis} />
                </section>
                <section className="charts">
                  <AnalysisCharts jobAnalysis={jobAnalysis} />
                </section>
                </>
              )
            } else {
              return (
                <section className="empty-content">
                  <h1>해당 날짜에는 수집 된 데이터가 없습니다.</h1>
                </section>
              )
            }
          }          
        })()
      }
    </div>
  )
}

export default JobDescribeTrend