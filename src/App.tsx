import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { routes } from "./routes"

const router = createBrowserRouter(
  routes,
  {
    basename: '/user_management'
  }
);

function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
