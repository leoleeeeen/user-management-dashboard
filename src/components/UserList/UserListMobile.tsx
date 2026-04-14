import type { UserListProps } from "./UserList";
import { UserCard } from "../UserCard";

export function UserListMobile({ isLoading, users }: UserListProps) {
    return (
        <>
            {users.map((user, i) => {
                if (isLoading) {
                    return (
                        <UserCard
                            key={i}
                            isLoading={isLoading} />)
                }
                if (!user) {
                    return;
                }
                return (
                    <UserCard
                        key={user.id}
                        user={user}
                        isLoading={isLoading} />)
            })}
        </>
    )
}
