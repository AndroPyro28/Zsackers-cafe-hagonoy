import { Navigate, Outlet } from 'react-router-dom'
import CustomerNavbar from '../components/customer-navbar/CustomerNavbar'
import { GetCurrentUser } from '../services'
import { CustomerRoutesContainer } from './components'

function CustomerRoutes() {
    const {data:user, isLoading, isError} = GetCurrentUser()

    if(isLoading) return <></>

    if(!user || isError) return <Navigate to="/login" />
    
    if(user.role === 'ADMIN') return <Navigate to={'/admin'} />
    
    if(user.role === 'STAFF') return <Navigate to={'/staff'} />
    
  return (
    <CustomerRoutesContainer>
        <CustomerNavbar />
        <Outlet />
    </CustomerRoutesContainer>
  )
}

export default CustomerRoutes