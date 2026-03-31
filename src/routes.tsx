import { Layout } from "./components/Layout";
import { UserCreationPage } from "./pages/UserCreationPage";
import { UserEditionPage } from "./pages/UserEditionPage";
import { UserListPage } from "./pages/UserListPage";
import { UserPage } from "./pages/UserPage";

export const routes = [
    {
        path: "/", element: <Layout />, children: [
            { index: true, element: <UserListPage /> },
            { path: "userPage/:userId", element: <UserPage /> },
            { path: "createUser", element: <UserCreationPage /> },
            { path: "editUser/:userId", element: <UserEditionPage /> }
        ]
    }
]