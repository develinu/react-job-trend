import React from 'react'
import './AnalysisDescribe.scss'
import Tags from './Tags'


const AnalysisDescribe = ({ jobAnalysis }) => {
  
  return (
    <div className="analysis-describe">
      <p>다음 {jobAnalysis?.items?.analysisCount}개 채용공고에 대한 분석 결과입니다.</p>
      <Tags tags={jobAnalysis.items?.company} />
    </div>
  )
}

export default AnalysisDescribe