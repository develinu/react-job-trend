import React, { useEffect } from 'react'
import { Nav } from 'react-bootstrap'
import './Tab.scss'


const Tab = ({ jobInfo, setJob }) => {

  const defaultJob = jobInfo[0].name

  useEffect(() => {
    setJob(defaultJob)
  }, [])

  const handleSelect = (eventKey) => {
    setJob(eventKey)
  }
  return (
    <div className="job-tabs">
      <Nav fill variant="tabs" defaultActiveKey={defaultJob} onSelect={handleSelect}>
        {
          jobInfo.map((job, idx) => {
            return (              
              <Nav.Item key={idx}>
                <Nav.Link 
                  className="job-tab"
                  eventKey={job.name}> {job.name} </Nav.Link>
              </Nav.Item>
            )
          })
        }
      </Nav>
    </div>
  )
}

export default Tab