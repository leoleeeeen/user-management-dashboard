import { mutationOptions } from "@tanstack/react-query"
import type { User } from "../getUsers/types"
import { httpClient } from "../httpClient"
import type { UserFormData } from "./types"

const createUser = (formData: UserFormData) => {

    return httpClient<User>({
        url: "/users/add",
        method: "POST",
        headers: {
            'X-API-KEY': import.meta.env.VITE_API_KEY,
            'Content-Type': 'application/json'
        },
        data: {
            ...formData,
            age: Number(formData.age)
        }
    })
}

const createMutationKey = () => {
    return ["createUser"];
}

export const createCreateUserOptions = () => {
    return mutationOptions({
        mutationFn: (formData: UserFormData) => createUser(formData),
        mutationKey: createMutationKey(),
    })
}