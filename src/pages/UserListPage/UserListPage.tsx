import { Link } from "react-router-dom"
import { UserList } from "@/components/UserList"
import { useTranslation } from "react-i18next"
import { Box, Button, Group, Input } from "@chakra-ui/react";

export function UserListPage() {
    const { t } = useTranslation("userListPage");
    return (
        <Box px="10" my="10" mx="auto" maxW="1200px">
            <form>
                <Group attached w="full">
                    <Input
                        placeholder={t("search_placeholder")}
                        className="input"
                    />
                    <Button type="submit" variant="secondary" alignSelf="stretch">
                        {t("search_button")}
                    </Button>
                </Group>
            </form>
            <Link to={"createUser"}>
                <Button variant="primary" mt="5" >
                    {t("create_user_button")}
                </Button>
            </Link>
            <UserList />
        </Box >
    );
}

