import { useQuery, useQueryClient } from "@tanstack/react-query"
import { createGetUserOptions } from "./api"

export const useGetUser = (userId: number) => {
    const queryClient = useQueryClient();
    return useQuery({ ...createGetUserOptions(userId, queryClient) })
}