import styles from "./UserList.module.css"
import { UserCard } from "../UserCard"

export function UserList() {
    return (
        <div className={styles.user_card_container}>
            <UserCard />
        </div>
    )
}
