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
    debouncedSearch?: string;
    skip?: number;
    limit?: number;
}

export const getUsers = ({ debouncedSearch, skip, limit }: UsersParams) => {
    if (debouncedSearch) {
        return httpClient<UsersData>({
            url: "/users/search",
            method: "GET",
            params: { q: debouncedSearch, skip, limit }
        })
    }

    return httpClient<UsersData>({
        url: "/users",
        method: "GET",
        params: { skip, limit }
    })
}