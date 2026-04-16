import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Box, Button, Table } from "@chakra-ui/react";
import type { User } from "@/api/getUsers/types";

export function UserRow({ user, isFetching }: { user: User, isFetching: boolean }) {
    const { t } = useTranslation("userRow");
    return (
        <Table.Row>
            <Table.Cell>{user.firstName}</Table.Cell>
            <Table.Cell>{user.age}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell >
                <Box display="flex" gap="2" justifyContent="end">
                    <Link to={`userPage/${user.id}`}>
                        <Button
                            variant="primary"
                            disabled={isFetching ? true : false}
                            _disabled={{ opacity: 1 }}>
                            {t("view_button")}
                        </Button>
                    </Link>

                    <Link
                        to={`editUser/${user.id}`}
                        state={{ fromUserPage: false }}>
                        <Button
                            variant="secondary"
                            disabled={isFetching ? true : false}
                            _disabled={{ opacity: 1 }}>
                            {t("edit_button")}
                        </Button>
                    </Link>
                </Box>
            </Table.Cell>
        </Table.Row>
    )
}
