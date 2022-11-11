import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import AdminNavbar from '../components/admin-navbar/AdminNavbar'
import { User } from '../model'
import user, {GetCurrentUser} from '../services/user'
import { AdminGlobalStyles, AdminRoutesContainer } from './components'

function AdminRoutes() {
  const {data:currentUser, isLoading} = GetCurrentUser()


  if(isLoading) {
    return <></>
  }
  if(!currentUser) {
    return <Navigate to="/" />
  }
  if(currentUser.role === 'CUSTOMER') {
    return <Navigate to={'/customer'} />
  }
  if(currentUser.role === 'STAFF') {
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