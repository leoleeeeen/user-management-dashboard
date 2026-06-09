import { Layout } from "@/shared/ui/layout/Layout";
import { UserCreationPage } from "@/pages/user-creation-page";
import { UserEditionPage } from "@/pages/user-edition-page";
import { UserPage } from "@/pages/user-page";
import { UsersPage } from "@/pages/users-page";

export const routes = [
    {
        path: "/", element: <Layout />, children: [
            { index: true, element: <UsersPage /> },
            { path: "userPage/:userId", element: <UserPage /> },
            { path: "createUser", element: <UserCreationPage /> },
            { path: "editUser/:userId", element: <UserEditionPage /> }
        ]
    }
]