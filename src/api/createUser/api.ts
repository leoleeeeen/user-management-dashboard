import { mutationOptions, QueryClient } from "@tanstack/react-query"
import type { User } from "../getUsers/types"
import { httpClient } from "../httpClient"
import type { CreateUserPayload } from "./types"

const createUser = (formData: CreateUserPayload) => {

    return httpClient<User>({
        url: "/users/add",
        method: "POST",
        headers: {
            'X-API-KEY': import.meta.env.VITE_API_KEY,
            'Content-Type': 'application/json'
        },
        data: {
            ...formData,
        }
    })
}

const createMutationKey = () => {
    return ["createUser"];
}

export const createCreateUserOptions = (queryClient: QueryClient) => {
    return mutationOptions({
        mutationFn: (formData: CreateUserPayload) => createUser(formData),
        mutationKey: createMutationKey(),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        }
    })
}