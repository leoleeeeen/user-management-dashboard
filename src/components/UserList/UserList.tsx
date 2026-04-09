import { useTranslation } from "react-i18next";
import { Table } from "@chakra-ui/react"
import { EmptyRow, SkeletonRow, UserRow } from "../UserRow";
import { type User } from "@/api/getUsers";


type UserListProps = {
    isLoading: boolean;
    filledData: User[]
}

export function UserList({ isLoading, filledData }: UserListProps) {
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
                {filledData.map((user, i) => {
                    if (isLoading) {
                        return (
                            <SkeletonRow key={i} />
                        );
                    }
                    if (!user) {
                        return (
                            <EmptyRow key={i} />
                        );
                    }
                    return <UserRow key={user.id} user={user} />;
                })}
            </Table.Body>
        </Table.Root>
    )
}
