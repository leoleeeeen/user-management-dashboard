import type { NormalizedUserData } from "@/api/createUser/types";

export function addUserImgLink(data: NormalizedUserData) {
    return {
        ...data,
        image: `${import.meta.env.VITE_IMG_API_URL}/${data.firstName}/150`
    }
}

