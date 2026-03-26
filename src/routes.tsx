import { Layout } from "./components/Header/Layout";
import { UserList } from "./pages/UserList/UserList";

export const routes = [
    {
        path: "/", element: <Layout />, children: [
            { index: true, element: <UserList /> }
        ]
    }
]