import { queryOptions } from "@tanstack/react-query";
import { httpClient } from "../httpClient"
import type { GetUsersParams, UsersData } from "./types";

const getUsers = ({ skip, limit }: GetUsersParams) => {

    return httpClient<UsersData>({
        url: "/users",
        headers: {
            'X-API-KEY': import.meta.env.VITE_API_KEY,
            'Content-Type': 'application/json',
        },
        method: "GET",
        params: {
            skip,
            limit,
            sortBy: "id",
            order: "desc"
        }
    })
}

const createQueryKey = (params: GetUsersParams) => {
    return ["users", { ...params }];
}

export const createGetUsersOptions = (params: GetUsersParams, isSearching: boolean) => {
    return queryOptions({
        queryKey: createQueryKey(params),
        queryFn: () => getUsers(params),
        placeholderData: (prev) => prev,
        staleTime: Infinity,
        enabled: !isSearching
    })
}