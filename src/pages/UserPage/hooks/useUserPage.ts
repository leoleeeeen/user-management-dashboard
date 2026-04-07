import { getUser } from "@/api/getUser";
import { getUserImg } from "@/api/getUserImg";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";

export function useUserPage() {
    const userId = useParams().userId;

    if (!userId) {
        throw new Error('userId is required');
    }

    const {
        data: user,
        isLoading: userInfoIsLoading
    } = useQuery({
        queryKey: ["user", userId],
        queryFn: () => getUser(userId),
        placeholderData: undefined
    })


    const { data: blob } = useQuery({
        enabled: !!user,
        queryKey: ["userImg"],
        queryFn: () => {
            if (!user?.firstName) {
                throw new Error("firstName is required");
            }
            return getUserImg(user?.firstName);
        },
    });

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
        imgUrl,
        user
    }
}