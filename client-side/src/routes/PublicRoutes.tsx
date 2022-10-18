import { faChessKing } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import PublicNavbar from '../components/public-navbar/PublicNavbar'
import { PublicRoutesContainer } from './components'

function PublicRoutes() {

  const {pathname} = useLocation()
  const excludedRoutes = ['login']
  
  return (
    <PublicRoutesContainer>
      {
        !excludedRoutes.some(path => pathname.includes(path)) && <PublicNavbar />
      }
      <Outlet />
    </PublicRoutesContainer>
  )
}

export default PublicRoutes