import './App.css';
import {AppMain, GlobalStyles} from "./appComponents"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import PublicRoutes from './routes/PublicRoutes';
import Index from './pages/public/index/Index';
import About from './pages/public/about/About';
import Login from './pages/customer/login/Login';
import Signup from './pages/customer/signup/Signup';

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
          path:'/customer/login'
        },
        {
          element: <Signup />,
          path:'/customer/signup'
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
