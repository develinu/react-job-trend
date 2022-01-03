import React, { useState, useEffect } from 'react'
import { NavDropdown, Button } from 'react-bootstrap'
import './DateDropdown.scss'

import { format } from 'date-fns'


const DateDropdown = ({ dateRange, date, setDate }) => {
  const dateFormat = 'yyyy-MM'
  const startDate = dateRange[0]
  const endDate = dateRange[dateRange.length -1]

  const handleSelect = (eventKey) => {
    setDate(eventKey)
  }

  const isStartDate = () => {
    return format(startDate, dateFormat) === date
  }

  const isEndDate = () => {
    return format(endDate, dateFormat) === date
  }

  const onPreviousDate = () => {
    const previousDate = format(dateRange[getCurrentDateIndex()-1], dateFormat)
    console.log(`previousDate : ${previousDate}`)
    setDate(previousDate)
  }  

  const onNextDate = () => {
    setDate(format(dateRange[getCurrentDateIndex()+1], dateFormat))
  }

  const getCurrentDateIndex = () => {
    return dateRange.findIndex(_date => format(_date, dateFormat) === date)
  }

  return (
    <div className="date-dropdown">
      <button 
        className={`btn btn-outline-primary ${isStartDate() ? "disabled" : null}`}
        onClick={onPreviousDate}> ＜ </button>
      <NavDropdown title={date} id="nav-dropdown" className="noselect" onSelect={handleSelect}>
        {
          dateRange.map(date => {
            const _date = format(date, dateFormat)
            return <NavDropdown.Item key={_date} eventKey={_date}>{_date}</NavDropdown.Item>
          })
        }
      </NavDropdown>
      <button 
        className={`btn btn-outline-primary ${isEndDate() ? "disabled" : null}`}
        onClick={onNextDate}> ＞ </button>
    </div>   
  )
}

export default DateDropdown