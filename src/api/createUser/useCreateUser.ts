import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCreateUserOptions } from "./api";

export const useCreateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({ ...createCreateUserOptions(queryClient) })
}