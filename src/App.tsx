import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { routes } from "./routes"
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useInitQueryClient } from "./hooks/useInitQueryClient";

const router = createBrowserRouter(
  routes,
  {
    basename: '/user_management'
  }
);

function App() {
  const queryClient = useInitQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <RouterProvider router={router} />
    </QueryClientProvider >
  )
}

export default App
