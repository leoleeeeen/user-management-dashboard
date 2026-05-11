import { mutationOptions, QueryClient } from "@tanstack/react-query"
import type { User } from "../getUsers/types"
import { httpClient } from "../httpClient"

const deleteUser = (userId: number) => {
    return httpClient<User>({
        url: `/users/${userId}`,
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": import.meta.env.VITE_API_KEY
        }
    })
}

const createMutationKey = () => {
    return ["deleteUser"]
}

export const createDeleteUserOptions = (queryClient: QueryClient) => {
    return mutationOptions({
        mutationKey: createMutationKey(),
        mutationFn: (userId: number) => deleteUser(userId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        }
    })
}