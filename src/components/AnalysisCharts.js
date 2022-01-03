import React, { useState, useEffect } from 'react'
import './AnalysisCharts.scss'
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { analysisInfo } from '../data/JobInfo'


const AnalysisCharts = ({ jobAnalysis, maxChartElementCount=20 }) => {  

  const [chartData, setChartData] = useState([])

  useEffect(() => {
    setChartData(parseChartData())
  }, [jobAnalysis])

  const parseChartData = () => {
    const _jobAnalysis = {...jobAnalysis}

    analysisInfo?.forEach(info => {
      _jobAnalysis[info.column] = _jobAnalysis[info.column]?.map(e => {
        return convertToChartData(e?.replace(/\[|\]| /g, '').split(','))
      }).slice(0, maxChartElementCount)
    })
    return _jobAnalysis
  }

  const convertToChartData = (data) => {
    return {
      name: data[0],
      count: data[1]
    }
  }
  
  return (
    <div className="analysis-charts">
      { console.log(jobAnalysis) }
      {
        Object.keys(jobAnalysis).length !== 0 && analysisInfo
        ? analysisInfo.map ((info, idx) => {
          return (
            <div className="analysis-chart">
              <h1>{info.title}</h1>
              <AnalysisChart key={idx} data={chartData[info.column]}/>
            </div>
          )
        })
        : null
      }
    </div>
  )
}

const AnalysisChart = ({ data }) => {
  console.log(data)
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 0, bottom: 5, left: 0 }}>
        <CartesianGrid fill="white" stroke="#ccc" strokeDasharray="5 5" />
        <XAxis 
          dataKey="name" 
          height={100} 
          interval={0} 
          angle={data?.length > 15 ? -45 : 0} 
          textAnchor={data?.length > 15 ? "end" : "middle"} 
          allowDataOverflow={true} />
        <YAxis />
        <Tooltip />
        <Bar className="chart-bar" dataKey="count" fill="#92140C" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default AnalysisCharts

/*
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  }
]
*/