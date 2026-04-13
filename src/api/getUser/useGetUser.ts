import { useQuery } from "@tanstack/react-query"
import { createGetUserOptions } from "./api"

export const useGetUser = (userId: string) => {
    return useQuery({ ...createGetUserOptions(userId) })
}