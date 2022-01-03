import React from 'react'
import './CustomSpinner.scss'
import { Spinner } from 'react-bootstrap'


const CustomSpinner = () => {
  return (
    <div className="spinner">
      <Spinner animation="border" />
    </div>
  )
}

export default CustomSpinner