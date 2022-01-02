import React, { useState, useEffect } from 'react'
import { NavDropdown } from 'react-bootstrap'
import './DateDropdown.scss'

import { API, graphqlOperation } from 'aws-amplify'
import { getJobDescribes } from '../graphql/queries'

const DateDropdown = ({ dates, setDates }) => {

  const [jobDescribes, setJobDescribes] = useState([])
  const [date, setDate] = useState('2021-12')

  useEffect(() => {
    const fetchJdList = async () => {
      const _jds = await API.graphql(graphqlOperation(getJobDescribes, { date: date }))
      setJobDescribes(_jds)
      console.log(_jds)
    }
    fetchJdList()
  }, [date])

  const handleSelect = (eventKey) => {
    setDate(eventKey)
  }

  return (
    <div className="date-dropdown">
      <NavDropdown title={date} id="nav-dropdown" onSelect={handleSelect}>
        <NavDropdown.Item eventKey="2021-06">{"2021-06"}</NavDropdown.Item>
        <NavDropdown.Item eventKey="2021-07">{"2021-07"}</NavDropdown.Item>
        <NavDropdown.Item eventKey="2021-08">{"2021-08"}</NavDropdown.Item>
      </NavDropdown>
    </div>   
  )
}

export default DateDropdown