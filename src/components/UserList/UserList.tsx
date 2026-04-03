import { useTranslation } from "react-i18next";
import { Table } from "@chakra-ui/react"
import { UserRow } from "../UserRow";

export type User = {
    id: number;
    name: string;
    lastName: string;
    age: number;
    email: string;
    tel: string;
}

const users: User[] = [
    {
        id: 1,
        name: "Pupa",
        lastName: "Pupkin",
        age: 18,
        email: "Lupa@email.ru",
        tel: "66666"
    },
    {
        id: 2,
        name: "Lupa",
        lastName: "Pupkin",
        age: 18,
        email: "Pupa@email.ru",
        tel: "66666"
    },
    {
        id: 3,
        name: "Chel",
        lastName: "Pupkin",
        age: 18,
        email: "Meow@email.ru",
        tel: "66666"
    }
]

export function UserList() {
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
                    <Table.ColumnHeader>{t("name")}</Table.ColumnHeader>
                    <Table.ColumnHeader>{t("age")}</Table.ColumnHeader>
                    <Table.ColumnHeader>{t("email")}</Table.ColumnHeader>
                    <Table.ColumnHeader textAlign="end">{t("actions")}</Table.ColumnHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {users.map((user) => (
                    <UserRow user={user} />
                ))}
            </Table.Body>
        </Table.Root>
    )
}
