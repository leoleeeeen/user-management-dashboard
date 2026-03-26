import { Layout } from "./components/Layout";
import { UserCreationPage } from "./pages/UserCreationPage/UserCreationPage";
import { UserEditionPage } from "./pages/UserEditionPage/UserEditionPage";
import { UserList } from "./pages/UserList/UserList";
import { UserPage } from "./pages/UserPage/UserPage";

export const routes = [
    {
        path: "/", element: <Layout />, children: [
            { index: true, element: <UserList /> },
            { path: "userPage/:userId", element: <UserPage /> },
            { path: "createUser", element: <UserCreationPage /> },
            { path: "editUser/:userId", element: <UserEditionPage /> }
        ]
    }
]