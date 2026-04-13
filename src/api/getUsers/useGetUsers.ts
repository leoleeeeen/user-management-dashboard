import { useQuery } from "@tanstack/react-query"
import { createGetUsersOptions } from "./api"
import type { GetUsersParams } from "./types"

export const useGetUsers = (params: GetUsersParams, isSearching: boolean) => {
    return useQuery({ ...createGetUsersOptions(params, isSearching) })
}