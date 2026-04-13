import { useQuery } from "@tanstack/react-query"
import { createGetUserImgOptions } from "./api"

export const useGetUserImg = (userFirstName: string) => {
    return useQuery({ ...createGetUserImgOptions(userFirstName) });
}