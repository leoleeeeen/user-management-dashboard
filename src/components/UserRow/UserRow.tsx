import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Box, Button, Table } from "@chakra-ui/react";
import type { User } from "../UserList/UserList";

export function UserRow({ user }: { user: User }) {
    const { t } = useTranslation("userRow");
    return (
        <Table.Row key={user.id}>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.age}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell >
                <Box display="flex" gap="2" justifyContent="end">
                    <Link to={"userPage/0"}>
                        <Button variant="primary">
                            {t("view_button")}
                        </Button>
                    </Link>
                    <Link
                        to={"editUser/0"}
                        state={{ fromUserPage: false }}>
                        <Button variant="secondary">
                            {t("edit_button")}
                        </Button>
                    </Link>
                </Box>
            </Table.Cell>
        </Table.Row>
    )
}
