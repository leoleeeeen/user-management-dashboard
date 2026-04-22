import { queryOptions } from "@tanstack/react-query";
import { httpClient } from "../httpClient"
import type { GetUsersParams, UsersData } from "./types";

const getUsers = ({ skip, limit }: GetUsersParams) => {

    return httpClient<UsersData>({
        url: "/users",
        method: "GET",
        params: { skip, limit }
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