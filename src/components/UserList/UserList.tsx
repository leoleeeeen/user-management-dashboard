import { useTranslation } from "react-i18next";
import { Table } from "@chakra-ui/react"
import { UserRow } from "../UserRow";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/api/getUsers";


export function UserList() {
    const { t } = useTranslation("userList");

    const { data } = useQuery({
        queryKey: ["users"],
        queryFn: getUsers
    })

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
                    <Table.ColumnHeader>{t("name")}</Table.ColumnHeader>
                    <Table.ColumnHeader>{t("age")}</Table.ColumnHeader>
                    <Table.ColumnHeader>{t("email")}</Table.ColumnHeader>
                    <Table.ColumnHeader textAlign="end">{t("actions")}</Table.ColumnHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {data && data.users.map((user) => (
                    <UserRow key={user.id} user={user} />
                ))}
            </Table.Body>
        </Table.Root>
    )
}
