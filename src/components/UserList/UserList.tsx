import { useTranslation } from "react-i18next";
import { Table } from "@chakra-ui/react"
import { SkeletonRow, UserRow } from "../UserRow";
import type { User } from "@/api/getUsers/types";

export type UserListProps = {
    isLoading: boolean;
    isFetching: boolean;
    users: User[],
    pageSize: number;
    handleDeleteUser: (userId: number) => void;
}

export function UserList({ isLoading, isFetching, users, pageSize, handleDeleteUser }: UserListProps) {
    const { t } = useTranslation("userList");

    return (
        <Table.Root
            mt="5"
            size="md"
            variant="outline"
            fontSize="md"
            rounded="lg"
            overflow="hidden">
            <Table.Header >
                <Table.Row >
                    <Table.ColumnHeader width="15%">{t("name")}</Table.ColumnHeader>
                    <Table.ColumnHeader width="10%">{t("age")}</Table.ColumnHeader>
                    <Table.ColumnHeader width="50%">{t("email")}</Table.ColumnHeader>
                    <Table.ColumnHeader width="25%" textAlign="end">{t("actions")}</Table.ColumnHeader>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {isLoading
                    ? Array.from({ length: pageSize }).map((_, i) =>
                        <SkeletonRow key={i} />)
                    : users.map((user) => {
                        if (!user) {
                            return;
                        }
                        return <UserRow key={user.id} user={user} isFetching={isFetching} handleDeleteUser={handleDeleteUser} />
                    })
                }
            </Table.Body>
        </Table.Root>
    )
}
