import React, { useState } from 'react'
import { NavDropdown } from 'react-bootstrap'
import './DateDropdown.scss'


const DateDropdown = ({ dates, setDates }) => {
  const [date, setDate] = useState('2021-06')

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