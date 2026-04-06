import { QueryClient } from "@tanstack/react-query"

export const useInitQueryClient = () => {
    return new QueryClient();
}