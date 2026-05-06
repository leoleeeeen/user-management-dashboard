import { mutationOptions, QueryClient } from "@tanstack/react-query"
import type { User } from "../getUsers/types"
import { httpClient } from "../httpClient"

const deleteUser = (userId: number) => {
    return httpClient<User>({
        url: `/users/${userId}`,
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": import.meta.env.API_KEY
        }
    })
}

const createMutationKey = (userId: number) => {
    return ["deleteUser", userId]
}

export const createDeleteUserOptions = (queryClient: QueryClient, userId: number) => {
    return mutationOptions({
        mutationKey: createMutationKey(userId),
        mutationFn: () => deleteUser(userId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        }
    })
}