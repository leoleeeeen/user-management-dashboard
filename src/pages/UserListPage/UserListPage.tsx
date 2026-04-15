import { Link } from "react-router-dom"
import { UserListResponsive } from "@/components/UserList"
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
        pageSize,
        updateParams,
        users,
        handleSearchSubmit,
        handleClear,
        isLoading,
        isError,
        refetch,
        showPagination,
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
                    {isLoading ? (
                        <UserListResponsive
                            isLoading={true}
                            users={[]}
                            pageSize={pageSize}
                        />
                    ) : users?.length ? (
                        <UserListResponsive
                            isLoading={false}
                            users={users}
                            pageSize={pageSize}
                        />
                    ) : null}
                    {showPagination && !isLoading &&
                        <PaginationComponent
                            page={page}
                            pages={pages}
                            updateParams={updateParams}
                            pageSize={pageSize}
                        />}
                </>}
        </Box >
    );
}

