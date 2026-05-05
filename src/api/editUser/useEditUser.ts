import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditUserOptions } from "./api";

export const useEditUser = (userId: number) => {
    const queryClient = useQueryClient();
    return useMutation({ ...createEditUserOptions(queryClient, userId) })
}

