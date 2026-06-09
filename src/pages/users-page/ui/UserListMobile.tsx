import { UserCard } from "./UserCard";
import type { UserListProps } from "./UserList";

export function UserListMobile({ isLoading, isFetching, users, pageSize, handleDeleteUser }: UserListProps) {
    return (
        <>
            {isLoading
                ? Array.from({ length: pageSize }).map((_, i) =>
                    <UserCard
                        key={i}
                        isLoading={isLoading}
                        handleDeleteUser={handleDeleteUser} />)
                : users.map((user) => {
                    if (!user) {
                        return;
                    }
                    return <UserCard
                        key={user.id}
                        user={user}
                        isLoading={isLoading}
                        isFetching={isFetching}
                        handleDeleteUser={handleDeleteUser}
                    />
                })
            }
        </>
    )
}

