import { queryOptions } from "@tanstack/react-query"
import type { User } from "../getUsers/types"
import { httpClient } from "../httpClient"

export const getUser = (userId: string) => {
    return httpClient<User>({
        url: `/users/${userId}`,
        method: "GET"
    })
}

const createQueryKey = (userId: string) => {
    return ["user", userId];
}

export const createGetUserOptions = (userId: string) => {
    return queryOptions({
        queryKey: createQueryKey(userId),
        queryFn: () => getUser(userId),
        placeholderData: undefined
    })
}