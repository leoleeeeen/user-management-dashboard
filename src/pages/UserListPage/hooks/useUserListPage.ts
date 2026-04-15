import { useGetSearchUsers } from "@/api/getSearchUsers/useGetSearchUsers";
import { useGetUsers } from "@/api/getUsers/useGetUsers";
import { useState } from "react";


export function useUserListPage() {
    const [search, setSearch] = useState("");
    const [searchInput, setSearchInput] = useState('');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);

    const isSearching = search.trim() !== "";

    const skip = (page - 1) * limit;

    const usersQuery = useGetUsers({ skip, limit: limit }, isSearching);
    const searchUsersQuery = useGetSearchUsers({ search, skip, limit: limit }, isSearching);

    const currentQuery = isSearching ? searchUsersQuery : usersQuery;

    const isLoading = currentQuery.isLoading;

    const users = currentQuery.data?.users ?? [];
    const total = currentQuery.data?.total ?? 0;
    const pages = Math.ceil(total / limit);

    const filledData = isLoading
        ? Array.from({ length: limit })
        : users.length < limit
            ? [...users, ...Array(limit - users.length).fill(null)]
            : users;

    const showPagination = !(users.length === 0 || (users.length <= limit && pages === 1));

    const handleSearchSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPage(1);
        setSearch(searchInput);
    }

    const handleClear = () => {
        setSearchInput('');
        setSearch('');
        setPage(1);
    };

    return {
        searchInput,
        setSearchInput,
        page,
        pages,
        setPage,
        limit,
        setLimit,
        users: filledData,
        handleSearchSubmit,
        handleClear,
        isLoading,
        isFetching: currentQuery.isFetching,
        isError: currentQuery.isError,
        refetch: currentQuery.refetch,
        showPagination,
    }
}