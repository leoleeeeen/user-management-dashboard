import { Link } from "react-router-dom"
import { UserListResponsive } from "@/components/UserList"
import { useTranslation } from "react-i18next"
import { Box, Button } from "@chakra-ui/react";
import { useUsersPage } from "./hooks/useUsersPage";
import { PaginationComponent } from "@/components/Pagination";
import { ErrorState } from "@/components/ErrorState";
import { SearchBar } from "@/components/SearchBar";
import { EmptyPageState } from "@/components/EmptyState";
import { DeletionDialog } from "@/components/UI/DeletionDialog";
import { useConfirmDeletion } from "@/hooks/useConfirmDeletion";

export function UsersPage() {
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
        showPagination
    } = useUsersPage();

    const {
        isConfirmOpen,
        handleDeleteUser,
        handleConfirmDelete,
        handleCloseModal
    } = useConfirmDeletion();

    return (
        <Box>
            <DeletionDialog confirm={handleConfirmDelete} cancel={handleCloseModal} isOpen={isConfirmOpen} />
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
                ? <ErrorState refetch={refetch} />
                : <>
                    {isLoading ? (
                        <UserListResponsive
                            isLoading={true}
                            isFetching={isFetching}
                            users={[]}
                            pageSize={pageSize}
                            handleDeleteUser={handleDeleteUser}
                        />
                    ) : users?.length ? (
                        <UserListResponsive
                            isLoading={false}
                            isFetching={isFetching}
                            users={users}
                            pageSize={pageSize}
                            handleDeleteUser={handleDeleteUser}
                        />
                    ) : <EmptyPageState />}
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

