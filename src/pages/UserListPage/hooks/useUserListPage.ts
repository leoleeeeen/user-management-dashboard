import { getUsers } from "@/api/getUsers";
import { useDebounce } from "@/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export function useUserListPage() {
    const [search, setSearch] = useState("");
    const [searchInput, setSearchInput] = useState('');
    const [page, setPage] = useState(1);

    const debouncedSearch = useDebounce(search, 300);
    const limit = 5;
    const skip = (page - 1) * limit;

    const {
        data,
        isLoading,
        isFetching,
        isError,
        refetch } = useQuery({
            queryKey: ["users", { debouncedSearch, page }],
            queryFn: () => getUsers({ debouncedSearch, skip, limit }),
            placeholderData: (prev) => prev,
        })

    const users = data?.users ?? [];
    const total = data?.total ?? 0;
    const pages = Math.ceil(total / limit);

    const filledData = isLoading
        ? Array.from({ length: limit })
        : users.length < limit
            ? [...users, ...Array(limit - users.length).fill(null)]
            : users;

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
        data,
        filledData,
        handleSearchSubmit,
        handleClear,
        isLoading,
        isFetching,
        isError,
        refetch
    }
}