import { QueryClient, mutationOptions } from "@tanstack/react-query";
import type { User } from "../getUsers/types";
import { httpClient } from "../httpClient";
import type { EditUserPayload } from "./types";

const editUser = (formData: EditUserPayload, userId: number) => {

    return httpClient<User>({
        url: `/users/${userId}`,
        method: "PATCH",
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
    return ["editUser"];
}

export const createEditUserOptions = (queryClient: QueryClient, userId: number) => {
    return mutationOptions({
        mutationFn: (formData: EditUserPayload) => editUser(formData, userId),
        mutationKey: createMutationKey(),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        }
    })
}