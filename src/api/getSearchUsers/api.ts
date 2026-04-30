import { queryOptions } from "@tanstack/react-query";
import type { UsersData } from "../getUsers/types";
import { httpClient } from "../httpClient";
import type { GetSearchUsersParams } from "./types";


const getSearchUsers = ({ search, skip, limit }: GetSearchUsersParams) => {

    return httpClient<UsersData>({
        url: "/users/search",
        method: "GET",
        headers: {
            'X-API-KEY': import.meta.env.VITE_API_KEY,
            'Content-Type': 'application/json'
        },
        params: {
            q: search,
            skip,
            limit
        }
    })
}

const createQueryKey = (params: GetSearchUsersParams) => {
    return ["searchUsers", { ...params }];
}

export const createSearchUsersOptions = (params: GetSearchUsersParams, isSearching: boolean) => {
    return queryOptions({
        queryKey: createQueryKey(params),
        queryFn: () => getSearchUsers(params),
        enabled: isSearching
    })
}