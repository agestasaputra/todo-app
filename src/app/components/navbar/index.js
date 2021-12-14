import React from 'react'
import './index.scss'
import { NavLink } from "react-router-dom";

const Navbar = ({ state, location }) => {
  return (
    <nav>
      <div className="container-navbar">
        <div className="container-navbar__icon-left">
          {
            location.pathname !== '/' && (
              <NavLink to={"/"}>
                <i className="fa fa-arrow-circle-left" />
              </NavLink>
            )
          }
        </div>
        <div className="container-navbar__title">
          <strong>To Do</strong>
        </div>
        <div className="container-navbar__icon-right">
          {
            location.pathname !== '/create' && (
              <NavLink to={"/create"}>
                <i className="fa fa-plus-circle" />
              </NavLink>
            )
          }
        </div>
      </div>
    </nav>
  )
}


export default Navbar;