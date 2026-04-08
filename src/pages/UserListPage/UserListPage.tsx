import { Link } from "react-router-dom"
import { UserList } from "@/components/UserList"
import { useTranslation } from "react-i18next"
import { Box, Button, Group, Input } from "@chakra-ui/react";
import { Cross } from "@/assets/icons/Cross";
import { useUserListPage } from "./hooks/useUserListPage";

import { PaginationComponent } from "@/components/Pagination";

export function UserListPage() {
    const { t } = useTranslation("userListPage");
    const {
        searchInput,
        setSearchInput,
        page,
        pages,
        setPage,
        data,
        handleSearchSubmit,
        handleClear,
    } = useUserListPage();

    return (
        <Box px="10" my="10" mx="auto" maxW="1200px">
            <form onSubmit={(e) => handleSearchSubmit(e)}>
                <Group attached w="full" position="relative">
                    <Input
                        placeholder={t("search_placeholder")}
                        className="input"
                        onChange={e => setSearchInput(e.target.value)}
                        value={searchInput}
                    />
                    <Button
                        onClick={handleClear}
                        variant="icon"
                        position="absolute"
                        right="75px"
                        zIndex="1"
                    >
                        <Cross />
                    </Button>
                    <Button
                        type="submit"
                        variant="secondary"
                        alignSelf="stretch">
                        {t("search_button")}
                    </Button>
                </Group>
            </form>
            <Link to={"createUser"}>
                <Button variant="primary" mt="5" >
                    {t("create_user_button")}
                </Button>
            </Link>
            <UserList users={data?.users ?? []} />
            <PaginationComponent page={page} pages={pages} setPage={setPage} />
        </Box >
    );
}

