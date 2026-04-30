import { useQuery } from "@tanstack/react-query"
import { createGetUserOptions } from "./api"

export const useGetUser = (userId: number) => {
    return useQuery({ ...createGetUserOptions(userId) })
}