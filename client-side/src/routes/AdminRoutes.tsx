import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import AdminNavbar from '../components/admin-navbar/AdminNavbar'
import {GetCurrentUser} from '../services/user'
import { AdminGlobalStyles, AdminRoutesContainer } from './components'

function AdminRoutes() {
  const {data:user, isLoading} = GetCurrentUser()


  if(isLoading) {
    return <></>
  }
  if(!user) {
    return <Navigate to="/" />
  }
  if(user.role === 'CUSTOMER') {
    return <Navigate to={'/customer'} />
  }
  if(user.role === 'STAFF') {
    return <Navigate to={'/staff'} />
  }

  return (
    <AdminRoutesContainer>
        <AdminNavbar />
        <AdminGlobalStyles />
        <Outlet />
    </AdminRoutesContainer>
  )
}

export default AdminRoutes