import type { UserListProps } from "./UserList";
import { UserCard } from "../UserCard";

export function UserListMobile({ isLoading, isFetching, users, pageSize }: UserListProps) {
    return (
        <>
            {isLoading
                ? Array.from({ length: pageSize }).map((_, i) =>
                    <UserCard
                        key={i}
                        isLoading={isLoading} />)
                : users.map((user) => {
                    if (!user) {
                        return;
                    }
                    return <UserCard
                        key={user.id}
                        user={user}
                        isLoading={isLoading}
                        isFetching={isFetching} />
                })
            }
        </>
    )
}

