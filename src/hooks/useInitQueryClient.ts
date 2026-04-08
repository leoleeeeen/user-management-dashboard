import { toaster } from "@/components/UI/Toaster/toasterCreate";
import { QueryCache, QueryClient } from "@tanstack/react-query"

export const useInitQueryClient = () => {
    return new QueryClient({
        defaultOptions: {
            queries: {
                retry: 1,
            }
        },
        queryCache: new QueryCache({
            onError: handleGlobalError
        })
    }
    );
}


const handleGlobalError = (error: Error) => {
    toaster.create({
        id: "global-error",
        title: "Error",
        description: error.message,
        type: "error",
        closable: true
    });
};