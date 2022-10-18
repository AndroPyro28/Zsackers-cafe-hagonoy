import React from 'react'
import { Outlet } from 'react-router-dom'
import PublicNavbar from '../components/public-navbar/PublicNavbar'
import { PublicRoutesContainer } from './components'

function PublicRoutes() {
  return (
    <PublicRoutesContainer>
      <PublicNavbar />
      <Outlet />
    </PublicRoutesContainer>
  )
}

export default PublicRoutes