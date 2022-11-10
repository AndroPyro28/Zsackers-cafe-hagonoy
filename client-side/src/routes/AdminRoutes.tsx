import { Outlet } from 'react-router-dom'
import AdminNavbar from '../components/admin-navbar/AdminNavbar'
import { AdminGlobalStyles, AdminRoutesContainer } from './components'

function AdminRoutes() {

  // const state: any = useSelector(state => state);
  // const user: User = state.user;
  // const profileModal = state.profileModal;
  // const loader = state.loader;

  // const {pathname} = useLocation();
  // let userCookie: string | undefined = Cookies.get("userToken");

  // if (!userCookie || userCookie.length <= 0) {
  //   return <Navigate to={'/'} />
  // }

  // let userToken: userToken = userCookie!

  // if (!userToken || userToken.length <= 0) {
  //   return <Navigate to={'/'} />
  // }

  // if(user.role === 'ADMIN') {
  //   return <Navigate to={'/admin'} />
  // }

  return (
    <AdminRoutesContainer>
        <AdminNavbar />
        <AdminGlobalStyles />
        <Outlet />
    </AdminRoutesContainer>
  )
}

export default AdminRoutes