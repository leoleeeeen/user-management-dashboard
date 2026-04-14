import { Link } from "react-router-dom"
import { UserList } from "@/components/UserList"
import { useTranslation } from "react-i18next"
import { Box, Button } from "@chakra-ui/react";
import { useUserListPage } from "./hooks/useUserListPage";
import { PaginationComponent } from "@/components/Pagination";
import { ErrorState } from "@/components/ErrorState";
import { SearchBar } from "@/components/SearchBar";
import { UserListMobile } from "@/components/UserList/UserListMobile";

export function UserListPage() {
    const { t } = useTranslation("userListPage");
    const {
        searchInput,
        setSearchInput,
        page,
        pages,
        setPage,
        users,
        handleSearchSubmit,
        handleClear,
        isLoading,
        isError,
        refetch,
        showPagination,
        isMobile
    } = useUserListPage();

    return (
        <Box>
            <SearchBar
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
                    {isMobile
                        ? <UserListMobile
                            users={users}
                            isLoading={isLoading} />
                        : <UserList
                            users={users}
                            isLoading={isLoading} />}
                    {showPagination && !isLoading &&
                        <PaginationComponent
                            page={page}
                            pages={pages}
                            setPage={setPage} />}
                </>}
        </Box >
    );
}

