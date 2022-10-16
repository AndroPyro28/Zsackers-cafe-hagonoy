import React from 'react'
import {PublicRoutesContainer} from "./components";
import {Outlet} from "react-router-dom";
function PublicRoutes() {
  return (
    <PublicRoutesContainer>
      <Outlet />
    </PublicRoutesContainer>
  )
}

export default PublicRoutes