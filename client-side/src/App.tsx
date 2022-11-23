import './App.css';
import {AppMain, GlobalStyles} from "./appComponents"
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom"
import PublicRoutes from './routes/PublicRoutes';
import Index from './pages/public/index/Index';
import About from './pages/public/about/About';
import Login from './pages/public/login/Login';
import Signup from './pages/public/signup/Signup';
import Inventory from './pages/admin/inventory/Inventory';
import AdminRoutes  from './routes/AdminRoutes';
import CustomerRoutes from './routes/CustomerRoutes';
import Store from './pages/customer/store/Store';
import StaffRoutes from './routes/StaffRoutes';
import Pos from './pages/staff/pos/Pos';
function App() {

  const router = createBrowserRouter([
    { // public
      element: <PublicRoutes />,
      path:"/",
      children: [
        {
          index: true,
          element: <Index />,
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
    },
    { // admin 
      element: <AdminRoutes />,
      path: '/admin',
      children: [
        {
          path: 'inventory',
          children: [
            {
              element: <Inventory />,
              index: true
            }
          ]
        }
      ]
    },
    { // customer
      element: <CustomerRoutes />,
      path: '/customer',
      children: [
        {
          path: 'store',
          children: [
            {
              element: <Store />,
              index: true,
            }, 
            // {
            //   path:":id",
            //   element:<ProductDetails />
            // },
          ]
        }
      ]
    },
    { // staff
      element: <StaffRoutes />,
      path: '/staff',
      children: [
        {
            path:'pos',
            element: <Pos />
        }
      ]
    },
  ])
  
  return (
    <AppMain>
      <GlobalStyles />
      <RouterProvider router={router} />
    </AppMain>
  );
}

export default App;
