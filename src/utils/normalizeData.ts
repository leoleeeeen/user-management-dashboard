import type { CreateUserPayload, UserFormData } from "@/api/createUser/types"

export const normalizeUserDataToApi = (data: UserFormData) => {
    return {
        ...data,
        age: Number(data.age)
    }
}

export const normalizeUserDataToFormValues = (data: CreateUserPayload) => {
    return {
        ...data,
        age: String(data.age)
    }
}
