import { useMutation } from "@tanstack/react-query";
import { createCreateUserOptions } from "./api";

export const useCreateUser = () => {
    return useMutation({ ...createCreateUserOptions() })
}