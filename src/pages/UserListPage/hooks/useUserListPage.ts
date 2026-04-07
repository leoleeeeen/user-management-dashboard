import { getUsers } from "@/api/getUsers";
import { useDebounce } from "@/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export function useUserListPage() {
    const [search, setSearch] = useState("");
    const [searchInput, setSearchInput] = useState('');
    const [page, setPage] = useState(1);

    const debouncedSearch = useDebounce(search, 300);

    const { data } = useQuery({
        queryKey: ["users", { debouncedSearch, page }],
        queryFn: () => getUsers({ debouncedSearch, page }),
        placeholderData: (prev) => prev,
    })

    const handleSearchSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch(searchInput);
    }

    const handleClear = () => {
        setSearchInput('');
        setSearch('');
        setPage(1);
    };

    return {
        search,
        setSearch,
        searchInput,
        setSearchInput,
        page,
        setPage,
        data,
        handleSearchSubmit,
        handleClear
    }
}