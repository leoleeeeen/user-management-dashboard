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
    users: User[];
    total: number;
}

type UsersParams = {
    search?: string;
    skip?: number;
    limit?: number;
}

export const getUsers = ({ search, skip, limit }: UsersParams) => {
    if (search) {
        return httpClient<UsersData>({
            url: "/users/search",
            method: "GET",
            params: { q: search, skip, limit }
        })
    }

    return httpClient<UsersData>({
        url: "/users",
        method: "GET",
        params: { skip, limit }
    })
}