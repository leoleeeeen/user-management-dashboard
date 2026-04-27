import { useGetSearchUsers } from "@/api/getSearchUsers/useGetSearchUsers";
import type { User } from "@/api/getUsers/types";
import { useGetUsers } from "@/api/getUsers/useGetUsers";
import { ROW_LIMIT } from "@/components/Pagination/LimitListCollection";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

type QueryParams = {
    page?: number;
    pageSize?: number;
    search?: string;
};

export type UpdateParams = Partial<QueryParams>;

export function useUserListPage() {
    const [searchInput, setSearchInput] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const queryClient = useQueryClient();

    const page = Number(searchParams.get("page")) || 1;
    const pageSize = Number(searchParams.get("pageSize")) || ROW_LIMIT[0];
    const search = searchParams.get("search") || "";

    const updateParams = (newParams: UpdateParams) => {
        const params: QueryParams = {
            page,
            pageSize,
            search,
            ...newParams,
        };

        const cleanedParams: Record<string, string> = Object.fromEntries(
            Object.entries(params)
                .filter(([, value]) => value !== undefined && value !== "")
                .map(([key, value]) => [key, String(value)])
        );

        setSearchParams(cleanedParams);
    };

    const isSearching = search.trim() !== "";

    const skip = (page - 1) * pageSize;

    const usersQuery = useGetUsers({ skip, limit: pageSize }, isSearching);
    const searchUsersQuery = useGetSearchUsers({ search, skip, limit: pageSize }, isSearching);
    const localUsers: User[] = queryClient.getQueryData(['localUsers']) || [];


    const users = isSearching
        ? searchUsersQuery.data?.users ?? []
        : skip === 0
            ? [...localUsers, ...(usersQuery.data?.users ?? [])]
            : usersQuery.data?.users ?? []

    const currentQuery = isSearching ? searchUsersQuery : usersQuery;
    const isLoading = currentQuery.isLoading;
    const total = currentQuery.data?.total ?? 0;
    const pages = Math.ceil(total / pageSize);

    const showPagination = !(users.length === 0);

    const handleSearchSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        updateParams({ page: 1, search: searchInput })
    }

    const handleClear = () => {
        setSearchInput('');
        updateParams({ page: 1, search: '' })
    };

    return {
        searchInput,
        setSearchInput,
        page,
        pages,
        updateParams,
        pageSize,
        users,
        handleSearchSubmit,
        handleClear,
        isLoading,
        isFetching: currentQuery.isFetching,
        isError: currentQuery.isError,
        refetch: currentQuery.refetch,
        isSearching,
        showPagination,
    }
}