export type User = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    phone: string;
    image: string;
}

export type ApiError = {
    message: string;
}

export type GetUsersParams = {
    skip: number;
    limit: number;
}

export type UsersData = {
    users: User[];
    total: number;
}