import { useGetUser } from "@/api/getUser/useGetUser";
import type { ApiError } from "@/api/getUsers/types";
import type { AxiosError } from "axios";
import { useParams } from "react-router-dom";

export function useUserPage() {
    const userId = Number(useParams().userId);

    if (!userId) {
        throw new Error('userId is required');
    }

    const {
        data: user,
        isLoading: userInfoIsLoading,
        isError,
        error,
        refetch
    } = useGetUser(userId);

    const axiosError = error as AxiosError<ApiError>;
    const errorResponseMessage = axiosError?.response?.data.message ?? "";

    return {
        userInfoIsLoading,
        isError,
        errorResponseMessage,
        refetch,
        user
    }
}