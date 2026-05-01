import type { UserFormData } from "@/api/createUser/types";
import type { User } from "@/api/getUsers/types";
import type { UseMutateFunction } from "@tanstack/react-query";
import type { SubmitHandler, UseFormReturn } from "react-hook-form";

export type UserFormProps = {
    isPending: boolean;
    form: UseFormReturn<UserFormData>;
    onSubmit: SubmitHandler<UserFormData>;
}

export type ToastMessage = {
    id: string;
    title: string;
    description: string;
}

export type MutateFunction = UseMutateFunction<User, Error, UserFormData, unknown>;