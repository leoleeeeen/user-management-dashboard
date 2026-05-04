import type { UserFormData } from "@/api/createUser/types";

export function addUserImgLink(data: UserFormData) {
    return {
        ...data,
        image: `${import.meta.env.VITE_IMG_API_URL}/${data.firstName}/150`
    }
}

