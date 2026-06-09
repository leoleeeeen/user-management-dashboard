import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useInitQueryClient } from "./providers/query-client/useInitQueryClient";
import { routes } from "./routes/routes";

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
