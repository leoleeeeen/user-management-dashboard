import type { UserFormDataWithImg } from "@/api/createUser/types"

export const normalizeUserData = (data: UserFormDataWithImg) => {
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
    data: UserFormDataWithImg;
    dirtyFields?: Partial<Record<keyof UserFormDataWithImg, boolean>>;
}) => {
    const normalized = normalizeUserData(params.data);

    if (params.dirtyFields) {
        return pickDirtyFields(normalized, params.dirtyFields);
    }

    return normalized;
}