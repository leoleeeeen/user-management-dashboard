import { queryOptions } from "@tanstack/react-query";
import { httpClient } from "../httpClient"

const getUserImg = (userFirstName: string) => {
    return httpClient<Blob>({
        url: `/image/150x150/7783F7/ffffff?text=${userFirstName}`,
        method: "GET",
        responseType: "blob"
    })
}

const createQueryKey = (userFirstName: string) => {
    return ["userImg", userFirstName];
}

export const createGetUserImgOptions = (userFirstName: string) => {
    return queryOptions({
        queryKey: createQueryKey(userFirstName),
        queryFn: () => getUserImg(userFirstName),
        enabled: !!userFirstName
    })
}