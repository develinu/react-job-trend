import React, { useState, useEffect } from 'react'
import { NavDropdown, Button } from 'react-bootstrap'
import './DateDropdown.scss'

import { format } from 'date-fns'


const DateDropdown = ({ dateRange, date, setDate }) => {
  const dateFormat = 'yyyy-MM'

  const handleSelect = (eventKey) => {
    setDate(eventKey)
  }

  return (
    <div className="date-dropdown">
      <button type="button" class="btn btn-outline-primary">＜</button>
      <NavDropdown title={date} id="nav-dropdown" onSelect={handleSelect}>
        {
          dateRange.map(date => {
            const _date = format(date, dateFormat)
            return <NavDropdown.Item key={_date} eventKey={_date}>{_date}</NavDropdown.Item>
          })
        }
      </NavDropdown>
      <button type="button" class="btn btn-outline-primary">＞</button>
    </div>   
  )
}

export default DateDropdown