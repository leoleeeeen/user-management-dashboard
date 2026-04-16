import { useGetUser } from "@/api/getUser/useGetUser";
import { useGetUserImg } from "@/api/getUserImg/useGetUserImg";
import { useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";

export function useUserPage() {
    const userId = useParams().userId;

    if (!userId) {
        throw new Error('userId is required');
    }

    const {
        data: user,
        isLoading: userInfoIsLoading,
        isError,
        refetch
    } = useGetUser(userId);

    const userFirstName = user?.firstName ?? "";

    const {
        data: blob,
        isLoading: userImgIsLoading
    } = useGetUserImg(userFirstName);

    const imgUrl = useMemo(() => {
        if (!blob) return undefined;
        return URL.createObjectURL(blob);
    }, [blob]);

    useEffect(() => {
        return () => {
            if (imgUrl) {
                URL.revokeObjectURL(imgUrl);
            }
        };
    }, [imgUrl]);

    return {
        userInfoIsLoading,
        userImgIsLoading,
        isError,
        refetch,
        imgUrl,
        user
    }
}