import { Outlet, useLocation } from 'react-router-dom'
import PublicNavbar from '../components/public-navbar/PublicNavbar'
import { PublicRoutesContainer } from './components'
import {excluded} from "./excluded"
function PublicRoutes() {

  const {pathname} = useLocation()
  
  return (
    <PublicRoutesContainer>
      {
        !excluded.some(path => pathname.includes(path)) && <PublicNavbar />
      }
      <Outlet />
    </PublicRoutesContainer>
  )
}

export default PublicRoutes