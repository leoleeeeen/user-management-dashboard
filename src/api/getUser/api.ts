import { queryOptions } from "@tanstack/react-query"
import type { User } from "../getUsers/types"
import { httpClient } from "../httpClient"

export const getUser = (userId: number) => {
    return httpClient<User>({
        url: `/users/${userId}`,
        method: "GET",
        headers: {
            'X-API-KEY': import.meta.env.VITE_API_KEY,
            'Content-Type': 'application/json'
        },
    })
}

const createQueryKey = (userId: number) => {
    return ["user", userId];
}

export const createGetUserOptions = (userId: number) => {

    return queryOptions({
        queryKey: createQueryKey(userId),
        queryFn: () => getUser(userId),
        placeholderData: undefined
    })
}