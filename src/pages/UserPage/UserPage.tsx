import { Link } from "react-router-dom"
import styles from "./UserPage.module.css"
import arrow from "@/assets/icons/arrow-narrow-left.svg"

export function UserPage() {
    return (
        <div className={styles.content}>
            <Link to={"/"}>
                <button
                    className="button_secondary icon_button">
                    <img src={arrow} className={styles.img} />
                    Back
                </button>
            </Link>
            <h1 className="heading_1">Pupa's user page</h1>
            <div className={styles.user_card}>
                <div>
                    <p><strong>Name: </strong>Pupa</p>
                    <p><strong>Email: </strong>Lupa@email.ru</p>
                    <p><strong>Age: </strong>18</p>
                    <p><strong>Phone: </strong>123456</p>
                </div>
                <Link
                    to={"/editUser/0"}
                    state={{ fromUserPage: true }}
                    className={styles.edit_button}>
                    <button className="button">
                        Edit
                    </button></Link>
            </div>
        </div>
    )
}


