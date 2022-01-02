import React from 'react'
import './AnalysisCharts.scss'
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


const AnalysisCharts = ({ jobAnalysis }) => {
  const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
  return (
    <div className="analysis-charts">
      <h1>title</h1>      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AnalysisCharts