import { TOASTS } from "@/components/UI/Toaster/toastMessages";
import { handleGlobalErrorToast } from "@/utils/handleGlobalErrorToast";
import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query"
import { useTranslation } from "react-i18next";

export const useInitQueryClient = () => {
    const { t } = useTranslation("toasts");

    return new QueryClient({
        defaultOptions: {
            queries: {
                retry: 1,
            }
        },
        queryCache: new QueryCache({
            onError: (error) => handleGlobalErrorToast(error, t(TOASTS.GLOBAL_ERROR.title))
        }),
        mutationCache: new MutationCache({
            onError: (error) => handleGlobalErrorToast(error, t(TOASTS.GLOBAL_ERROR.title))
        })
    });
}

