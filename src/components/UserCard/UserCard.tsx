import { Link } from "react-router-dom"
import styles from "./UserCard.module.css"

export function UserCard() {
    return (
        <div className={styles.user_card}>
            <span><strong>Pupa</strong>, 18 Lupa@email.ru</span>
            <div className={styles.button_container}>
                <Link to={"userPage/0"}><button className="button">View</button></Link>
                <Link to={"editUser/0"} state={{ fromUserPage: false }}><button className="button_secondary">Edit</button></Link>
            </div>
        </div>
    )
}
