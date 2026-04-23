import { mutationOptions } from "@tanstack/react-query"
import type { QueryClient } from "@tanstack/react-query"
import type { User } from "../getUsers/types"
import { httpClient } from "../httpClient"
import type { UserFormData, UsersResponse } from "./types"

const createUser = (formData: UserFormData) => {

    const { firstName,
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
            const queries = queryClient.getQueriesData<UsersResponse>({
                queryKey: ['users'],
            });

            queries.forEach(([queryKey, oldData]) => {
                if (!oldData) return;

                const [, params] = queryKey as [
                    string,
                    { skip?: number; limit?: number }
                ];

                if (params?.skip !== 0) return;

                const userWithLocalId = {
                    ...data,
                    id: Date.now()
                }

                queryClient.setQueryData(queryKey, {
                    ...oldData,
                    users: [userWithLocalId, ...oldData.users],
                });
            });
        }
    })
}