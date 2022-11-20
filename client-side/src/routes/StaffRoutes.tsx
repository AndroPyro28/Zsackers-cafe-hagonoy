import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { GetCurrentUser } from '../services'
import {StaffRoutesContainer} from './components'
function StaffRoutes() {
    const {data:user, isLoading, isError} = GetCurrentUser()

    if(isLoading) return <></>

    if(!user || isError) return <Navigate to="/login" />

    if(user.role === 'ADMIN') return <Navigate to={'/admin'} />
    
    if(user.role === 'CUSTOMER') return <Navigate to={'/customer'} />
    
    return(
        <StaffRoutesContainer>
          <Outlet />
        </StaffRoutesContainer>
    )
}

export default StaffRoutes