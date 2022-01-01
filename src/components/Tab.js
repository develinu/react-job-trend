import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import './Tab.scss'


const Tab = ({ jobs }) => {

  return (
    <div className="job-tabs">
      <Nav fill variant="tabs" defaultActiveKey="/job/1">      
        {
          jobs.map((job, idx) => {
            return (
              <Nav.Item key={idx}>
                <Nav.Link 
                  eventKey={`/job/${job.id}`}> {job.name} </Nav.Link>
              </Nav.Item>
            )
          })
        }
      </Nav>
    </div>
  )
}

export default Tab