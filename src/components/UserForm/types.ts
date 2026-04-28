import type { UserFormData } from "@/api/createUser/types";
import type { User } from "@/api/getUsers/types";
import type { UseMutateFunction } from "@tanstack/react-query";

export type UserFormProps = {
    mutate: MutateFunction;
    isPending: boolean;
    toastMessage: ToastMessage;
}

export type ToastMessage = {
    id: string;
    title: string;
    description: string;
}

export type MutateFunction = UseMutateFunction<User, Error, UserFormData, unknown>;