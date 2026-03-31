import styles from "./UserCreationPage.module.css"
import arrow from "@/assets/icons/arrow-narrow-left.svg"
import { UserForm } from "@/components/UserForm";
import { Link } from "react-router-dom"

export function UserCreationPage() {
    return (
        <div className={styles.content}>
            <Link to={"/"}>
                <button
                    className="button_secondary icon_button">
                    <img src={arrow} />
                    Back
                </button>
            </Link>
            <h1 className="heading_1 text_center">Create user</h1>
            <UserForm />
        </div>
    )
}

