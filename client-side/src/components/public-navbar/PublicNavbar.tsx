import React from 'react'
import { PublicNavbarContainer, Links } from './components'
import { NavLink } from "react-router-dom";

function PublicNavbar() {
  return (
    <PublicNavbarContainer>
      <img src="/assets/logo.jpg" />

      <Links>
        <NavLink to={'/'}>
          Home
        </NavLink>

        <NavLink to={'/'}>
          About
        </NavLink>

        <NavLink to={'/'}>
          Products
        </NavLink>
      </Links>

      <a>
        Signin
      </a>
    </PublicNavbarContainer>
  )
}

export default PublicNavbar