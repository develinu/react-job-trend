import React from 'react'
import { logo, menus } from '../data/header'
import './Nav.scss'


const Nav = () => {

  return (
    <nav className="top-nav">
      <div className="logo">
        <img src={logo.src} alt={logo.alt} />
      </div>
      <div className="menus">
        {
          menus.map((menu, idx) => {
            return (
              <div key={idx} className="menu">
                <p> {menu.name} </p>
              </div>
            )
          })
        }
      </div>
    </nav>
  )
}

export default Nav