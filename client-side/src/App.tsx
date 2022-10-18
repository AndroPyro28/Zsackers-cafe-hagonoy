import './App.css';
import {AppMain, GlobalStyles} from "./appComponents"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import PublicRoutes from './routes/PublicRoutes';
import Index from './pages/public/index/Index';
import About from './pages/public/about/About';
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
