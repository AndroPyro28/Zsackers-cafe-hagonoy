import "./App.css"
import {GlobalStyles, MainApp} from "./appComponents";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import Index from "./pages/public/Index";
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <PublicRoutes />,
      children: [
        {
          path:'',
          element: <Index />
        }
      ]
    }
  ])
  return (
    <MainApp>
      <GlobalStyles />
      <RouterProvider router={router} />
    </MainApp>
  );
}

export default App;
