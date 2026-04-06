import type { User } from "./getUsers";
import { httpClient } from "./httpClient";


export const getUser = (userId: string) => {
    return httpClient<User>({
        url: `/${userId}`,
        method: "GET"
    })
}