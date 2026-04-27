import { mutationOptions } from "@tanstack/react-query"
import type { QueryClient } from "@tanstack/react-query"
import type { User } from "../getUsers/types"
import { httpClient } from "../httpClient"
import type { UserFormData } from "./types"

const createUser = (formData: UserFormData) => {

    const {
        firstName,
        lastName,
        age,
        phone,
        email
    } = formData;

    return httpClient<User>({
        url: "/users/add",
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        data: {
            firstName,
            lastName,
            age: Number(age),
            phone,
            email
        }
    })
}

const createMutationKey = () => {
    return ["createUser"];
}

export const createCreateUserOptions = (queryClient: QueryClient) => {
    return mutationOptions({
        mutationFn: (formData: UserFormData) => createUser(formData),
        mutationKey: createMutationKey(),
        onSuccess: (data) => {
            const usersWithLocalId = {
                ...data,
                id: Date.now()
            }

            queryClient.setQueryData(['localUsers'], (old: User[] = []) =>
                [usersWithLocalId,
                    ...old
                ])
        }
    })
}