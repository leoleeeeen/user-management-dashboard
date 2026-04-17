import { Box, Button, Card, DataList, Heading, Skeleton } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import type { User } from "@/api/getUsers/types";
import { Edit } from "@/assets/icons/Edit";
import { Link } from "react-router-dom";

type UserCardProps = {
    user?: User;
    isLoading: boolean;
}

export function UserCard({ user, isLoading }: UserCardProps) {
    const { t: tList } = useTranslation("userList");
    const { t: tCard } = useTranslation("userRow")

    return (
        <Card.Root size="md" mt="4" rounded="lg">
            <Card.Header
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                pt="4"
                px="4">

                {isLoading
                    ? <Skeleton height="24px" width="50%" />
                    : <Heading size="md" display="inline">{user?.firstName} {user?.lastName}</Heading>}
                <Link
                    to={`editUser/${user?.id}`}
                    state={{ fromUserPage: false }}>
                    <Button variant="secondary" px="10px">
                        <Edit />
                    </Button>
                </Link>
            </Card.Header>

            <Card.Body color="fg.muted" p="4">
                <DataList.Root orientation="horizontal" size="lg">
                    <DataList.Item
                        key={tList("age")}
                        flexDirection={{ base: "column", sm: "row" }}
                        alignItems={{ base: "flex-start", sm: "center" }}
                        gap={{ base: 1, sm: 4 }}>
                        <DataList.ItemLabel color="black">{tList("age")}</DataList.ItemLabel>

                        {isLoading
                            ? <Skeleton height="24px" width="10%" />
                            : <DataList.ItemValue>{user?.age}</DataList.ItemValue>}
                    </DataList.Item>

                    <DataList.Item
                        key={tList("email")}
                        flexDirection={{ base: "column", sm: "row" }}
                        alignItems={{ base: "flex-start", sm: "center" }}
                        gap={{ base: 1, sm: 4 }}>
                        <DataList.ItemLabel color="black">{tList("email")}</DataList.ItemLabel>
                        {isLoading
                            ? <Skeleton height="24px" width="30%" />
                            : <DataList.ItemValue>{user?.email}</DataList.ItemValue>}
                    </DataList.Item>
                </DataList.Root>

                <Box display="flex" gap="2" justifyContent="center" mt="6">
                    <Link to={`userPage/${user?.id}`} className="link_wide_button">
                        <Button variant="primary" width="100%">
                            {tCard("view_button")}
                        </Button>
                    </Link>
                </Box>
            </Card.Body>
        </Card.Root >
    )
}
