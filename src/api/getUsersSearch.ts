import type { UsersData } from "./getUsers";
import { httpClient } from "./httpClient";

type UsersParams = {
    search?: string;
    skip?: number;
    limit?: number;
}

export const getUsersSearch = ({ search, skip, limit }: UsersParams) => {

    return httpClient<UsersData>({
        url: "/users/search",
        method: "GET",
        params: { q: search, skip, limit }
    })
}