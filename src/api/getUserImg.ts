import { httpClient } from "./httpClient"

export const getUserImg = (userName: string) => {
    return httpClient<Blob>({
        url: `/image/150x150/7783F7/ffffff?text=${userName}`,
        method: "GET",
        responseType: "blob"
    })
}