import { Link } from "react-router-dom"
import { UserListResponsive } from "@/components/UserList"
import { useTranslation } from "react-i18next"
import { Box, Button } from "@chakra-ui/react";
import { useUserListPage } from "./hooks/useUserListPage";
import { PaginationComponent } from "@/components/Pagination";
import { ErrorStateComponent } from "@/components/ErrorStateComponent";
import { SearchBar } from "@/components/SearchBar";
import { EmptyStateComponent } from "@/components/EmptyStateComponent";

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
        isFetching,
        isSearching,
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
                handleClear={handleClear}
                isLoading={isSearching ? isLoading : false} />

            <Link to={"createUser"}>
                <Button variant="primary" mt="5" >
                    {t("create_user_button")}
                </Button>
            </Link>

            {isError
                ? <ErrorStateComponent refetch={refetch} />
                : <>
                    {isLoading ? (
                        <UserListResponsive
                            isLoading={true}
                            isFetching={isFetching}
                            users={[]}
                            pageSize={pageSize}
                        />
                    ) : users?.length ? (
                        <UserListResponsive
                            isLoading={false}
                            isFetching={isFetching}
                            users={users}
                            pageSize={pageSize}
                        />
                    ) : <EmptyStateComponent />}
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

