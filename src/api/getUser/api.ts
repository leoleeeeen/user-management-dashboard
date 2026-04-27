import { QueryClient, queryOptions } from "@tanstack/react-query"
import type { User } from "../getUsers/types"
import { httpClient } from "../httpClient"

export const getUser = (userId: number) => {
    return httpClient<User>({
        url: `/users/${userId}`,
        method: "GET"
    })
}

const createQueryKey = (userId: number) => {
    return ["user", userId];
}

export const createGetUserOptions = (userId: number, queryClient: QueryClient) => {

    return queryOptions({
        queryKey: createQueryKey(userId),
        queryFn: () => {
            const localUsers: User[] = queryClient.getQueryData(["localUsers"]) || [];
            const localUser = localUsers.find(user => user.id === userId);

            if (localUser) return localUser;

            return getUser(userId)
        },
        placeholderData: undefined
    })
}