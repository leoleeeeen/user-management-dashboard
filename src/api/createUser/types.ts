import type { User } from "../getUsers/types";

export type UserFormData = {
    firstName: string;
    lastName: string;
    age: string;
    email: string;
    phone: string;
}

export interface UserFormDataWithImg extends UserFormData {
    image: string;
}

export type CreateUserPayload = {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    phone: string;
    image: string;
}

export type UsersResponse = {
    users: User[]
    total: number
    skip: number
    limit: number
}