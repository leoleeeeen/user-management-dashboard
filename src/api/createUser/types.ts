import type { User } from "../getUsers/types";

export type UserFormData = {
    firstName: string;
    lastName: string;
    age: string;
    email: string;
    phone: string;
}

export type CreateUserPayload = {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    phone: string;
}

export type UsersResponse = {
    users: User[]
    total: number
    skip: number
    limit: number
}