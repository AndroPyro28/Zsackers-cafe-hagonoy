import './App.css';
import {AppMain, GlobalStyles} from "./appComponents"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import PublicRoutes from './routes/PublicRoutes';
import Index from './pages/public/index/Index';
import About from './pages/public/about/About';
import Login from './pages/public/login/Login';
import Signup from './pages/public/signup/Signup';
import Inventory from './pages/admin/inventory/Inventory';
import AdminRoutes  from './routes/AdminRoutes';
import { useGetMeQuery } from './services/user';
import {useDispatch, useSelector} from "react-redux";
import { authenticationFailed, authenticationSuccess } from './features';
import Cookies from 'js-cookie';

function App() {
  const router = createBrowserRouter([
    {
      element: <PublicRoutes />,
      path:"/",
      children: [
        {
          element: <Index />,
          path: ''
        },
        {
          element: <About />,
          path: 'about'
        },
        {
          element: <Login />,
          path:'login'
        },
        {
          element: <Signup />,
          path:'signup'
        }
      ]
    }, {
      element: <AdminRoutes />,
      path: '/admin',
      children: [
        {
          element: <Inventory />,
          path: 'inventory'
        }
      ]
    }
  ])
  

  return (
    <AppMain>
      <GlobalStyles />
      <RouterProvider router={router} />
    </AppMain>
  );
}

export default App;
