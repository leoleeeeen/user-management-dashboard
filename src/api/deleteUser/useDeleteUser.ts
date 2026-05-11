import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createDeleteUserOptions } from "./api"

export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation({ ...createDeleteUserOptions(queryClient) })
}