import { Link } from "react-router-dom"
import styles from "./UserList.module.css"

export function UserList() {
    return (
        <div className={styles.content}>
            <form className={styles.search_form}>
                <input className="input" placeholder="Enter a name" />
                <button className="button">Search</button>
            </form>
            <Link to={"createUser"}><button className={`button ${styles.createUser_button}`}>Create user</button></Link>
            <div className={styles.user_card_container}>
                <div className={styles.user_card}>
                    <span><strong>Pupa</strong>, 18 Lupa@email.ru</span>
                    <div className={styles.button_container}>
                        <Link to={"userPage/0"}><button className="button">View</button></Link>
                        <Link to={"editUser/0"}><button className="button_secondary">Edit</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

