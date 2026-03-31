import { Link } from "react-router-dom"
import styles from "./UserListPage.module.css"
import { UserList } from "@/components/UserList"

export function UserListPage() {
    return (
        <div className={styles.content}>
            <form className={styles.search_form}>
                <input className="input" placeholder="Enter a name" />
                <button className="button">Search</button>
            </form>
            <Link to={"createUser"}><button className={`button ${styles.createUser_button}`}>Create user</button></Link>
            <UserList />
        </div>
    )
}

