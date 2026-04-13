import { useQuery } from "@tanstack/react-query"
import { createSearchUsersOptions } from "./api"
import type { GetSearchUsersParams } from "./types"

export const useGetSearchUsers = (params: GetSearchUsersParams, isSearching: boolean) => {
    return useQuery({ ...createSearchUsersOptions(params, isSearching) })
}