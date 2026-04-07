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

type UsersParams = {
    debouncedSearch?: string;
    page?: number;
    limit?: number;
}

export const getUsers = ({ debouncedSearch, page, limit }: UsersParams) => {
    if (debouncedSearch) {
        return httpClient<UsersData>({
            url: "/users/search",
            method: "GET",
            params: { q: debouncedSearch, page, limit }
        })
    }

    return httpClient<UsersData>({
        url: "/users",
        method: "GET",
        params: { page, limit }
    })
}