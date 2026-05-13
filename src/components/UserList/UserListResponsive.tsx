import { Box } from "@chakra-ui/react";
import { UserListMobile } from "./UserListMobile";
import { UserList, type UserListProps } from "./UserList";
import { EmptyPageState } from "../EmptyState";

export function UserListResponsive(props: UserListProps) {
    if (props.users.length === 0 && !props.isLoading) {
        return <EmptyPageState />
    }

    return (
        <>
            <Box display={{ base: "block", md: "none" }}>
                <UserListMobile {...props} />
            </Box>
            <Box display={{ base: "none", md: "block" }}>
                <UserList {...props} />
            </Box>
        </>
    )
}
