import React from 'react'
import { logo, menus } from '../data/header'
import './Nav.scss'
import { NavLink, Link } from 'react-router-dom'


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
              <NavLink key={idx} to={menu.path} activeClassName='is-active' className="menu noselect">
                  <p> {menu.name} </p>
              </NavLink>
            )
          })
        }
      </div>
    </nav>
  )
}

export default Nav