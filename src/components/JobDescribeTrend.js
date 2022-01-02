import React, { useState, useEffect } from 'react'
import './JobDescribeTrend.scss'
import DateDropdown from './DateDropdown';
import Tab from './Tab'
import AnalysisDescribe from './AnalysisDescribe';
import AnalysisCharts from './AnalysisCharts';

import { API, graphqlOperation } from 'aws-amplify'
import { getJobDescribes } from '../graphql/queries'
import { format, sub, eachMonthOfInterval } from 'date-fns'
import { getKstDate } from '../utils/date'
import { jobInfo } from '../data/JobInfo'


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
  const startDate = new Date(2021, 7, 1)
  const endDate = getEndDate()
  const dateRange = getDateRange(startDate, endDate)
  const [date, setDate] = useState(format(endDate, dateFormat))
  const [jobDescribes, setJobDescribes] = useState([])
  const [jobDescribe, setJobDescribe] = useState()
  const [job, setJob] = useState(jobInfo[0].name)

  useEffect(() => {
    const fetchJdList = async () => {
      const _jds = await API.graphql(graphqlOperation(getJobDescribes, { date: date }))
      setJobDescribes(_jds?.data?.listJobAnalyses?.items)
      console.log(jobDescribes)
    }
    fetchJdList()
  }, [date])

  useEffect(() => {
    console.log(`changed job : ${job}`)
  }, [job])

  return (
    <div className="job-describe-trend">
      <section className="job-filter">
        <DateDropdown dateRange={dateRange} date={date} setDate={setDate}/>
        <Tab jobInfo={jobInfo} setJob={setJob}/>
      </section>
      <section className="job-intro">
        <AnalysisDescribe />
      </section>
      <section className="charts">
        <AnalysisCharts />
      </section>
    </div>
  )
}

export default JobDescribeTrend