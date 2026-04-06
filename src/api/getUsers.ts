import { httpClient } from "./httpClient"


export type User = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    phone: string;
}

export type UsersData = {
    users: User[]
}

export const getUsers = () => {
    return httpClient<UsersData>({
        url: "/",
        method: "GET"
    })
}