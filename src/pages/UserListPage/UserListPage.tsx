import { Link } from "react-router-dom"
import { UserListResponsive } from "@/components/UserList"
import { useTranslation } from "react-i18next"
import { Box, Button } from "@chakra-ui/react";
import { useUserListPage } from "./hooks/useUserListPage";
import { PaginationComponent } from "@/components/Pagination";
import { ErrorStateComponent } from "@/components/ErrorStateComponent";
import { SearchBar } from "@/components/SearchBar";
import { EmptyStateComponent } from "@/components/EmptyStateComponent";
import { DeletionDialog } from "@/components/UI/DeletionDialog";
import { useConfirmDeletion } from "@/hooks/useConfirmDeletion";

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
        showPagination
    } = useUserListPage();

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
                ? <ErrorStateComponent refetch={refetch} />
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

