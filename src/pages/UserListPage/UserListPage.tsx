import { Link } from "react-router-dom"
import { UserList } from "@/components/UserList"
import { useTranslation } from "react-i18next"
import { Box, Button } from "@chakra-ui/react";
import { useUserListPage } from "./hooks/useUserListPage";
import { PaginationComponent } from "@/components/Pagination";
import { ErrorState } from "@/components/ErrorState";
import { SearchBar } from "@/components/SearchBar";

export function UserListPage() {
    const { t } = useTranslation("userListPage");
    const {
        searchInput,
        setSearchInput,
        page,
        pages,
        setPage,
        filledData,
        // data,
        handleSearchSubmit,
        handleClear,
        isLoading,
        isError,
        refetch
    } = useUserListPage();


    return (
        <Box px="10" my="10" mx="auto" maxW="1200px">
            <SearchBar
                t={t}
                handleSearchSubmit={handleSearchSubmit}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                handleClear={handleClear} />
            <Link to={"createUser"}>
                <Button variant="primary" mt="5" >
                    {t("create_user_button")}
                </Button>
            </Link>
            {isError
                ? <ErrorState refetch={refetch} />
                : <>
                    <UserList
                        filledData={filledData}
                        isLoading={isLoading} />
                    <PaginationComponent
                        page={page}
                        pages={pages}
                        setPage={setPage} />
                </>}
        </Box >
    );
}

