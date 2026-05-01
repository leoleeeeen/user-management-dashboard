import type { UserFormData } from "@/api/createUser/types"

const normalizeUserData = (data: UserFormData) => {
    return {
        ...data,
        age: Number(data.age)
    }
}

const pickDirtyFields = <T>(
    data: T,
    dirtyFields: Partial<Record<keyof T, boolean>>) => {
    return Object.keys(dirtyFields).reduce((acc, key) => {
        acc[key as keyof T] = data[key as keyof T];
        return acc;
    }, {} as Partial<T>);
};

export const buildUserPayload = (params: {
    data: UserFormData;
    dirtyFields?: Partial<Record<keyof UserFormData, boolean>>;
}) => {
    const normalized = normalizeUserData(params.data);

    if (params.dirtyFields) {
        return pickDirtyFields(normalized, params.dirtyFields);
    }

    return normalized;
}