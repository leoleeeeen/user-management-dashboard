import type { User } from "../getUsers/types";

export type UserFormData = {
    firstName: string;
    lastName: string;
    age: string;
    email: string;
    phone: string;
}

export type NormalizedUserData = {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    phone: string;
}

export interface CreateUserPayload extends NormalizedUserData {
    image: string;
}

export type UsersResponse = {
    users: User[];
    total: number;
    skip: number;
    limit: number;
}