import './App.css';
import {AppMain, GlobalStyles} from "./appComponents"
import {createBrowserRouter, RouterProvider } from "react-router-dom"
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
import Checkout from './pages/customer/checkout/Checkout';
import Payment from './pages/customer/payment/Payment';
import Employees from './pages/admin/employees/Employees';
import {ToastContainer} from 'react-toastify';
import Orders from './pages/admin/orders/Orders';
import OrderDetails from './pages/admin/order_details/OrderDetails';
import Purchases from './pages/customer/purchases/Purchases';
import Preparing from './components/purchases/Preparing';
import ToReceive from './components/purchases/ToReceive';
import PurchaseDetails from './pages/customer/purchase-detail/PurchaseDetails';
import '@progress/kendo-theme-default/dist/all.css';
import "react-toastify/dist/ReactToastify.css";

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
        },
        {
          path: 'employees',
          children: [
            {
              element: <Employees />,
              index: true
            }
          ]
        },
        {
          path: 'orders',

          children: [
            // {
            //   element: <Orders />,
            //   index: true
            // },
            // {
            //   path:":order_id",
            //   element:<OrderDetails />
            // },
          ]
        }
      ]
    },
    { // customer
      element: <CustomerRoutes />,
      path: '/customer',
      children: [
        {
          path: '',
          element: <Index />
        },
        {
          path: 'store',
          children: [
            {
              element: <Store />,
              index: true,
            }, 
          ]
        },
        {
          path: 'checkout',
          children: [
            {
              element: <Checkout />,
              index: true
            }
          ]
        },
        {
          path: 'payment',
          children: [
            {
              element: <Payment />,
              index: true
            }
          ]
        },
        {
          path: 'purchases',
          element: <Purchases />,
          children: [
            {
              index: true,
              element: <Preparing />
            },
            {
              path: 'preparing',
              element: <Preparing />
            },
            {
              path: 'to-receive',
              element: <ToReceive />
            },
            
          ]
        },
        {
          path: 'purchase-details/:order_id',
          element: <PurchaseDetails />
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
      <ToastContainer autoClose={2500} />
      <RouterProvider router={router} />
    </AppMain>
  );
}

export default App;
