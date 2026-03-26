import { UserForm } from "@/components/UserForm/UserForm"
import styles from "./UserCreationPage.module.css"
import arrow from "@/assets/images/arrow-narrow-left.svg"
import { useNavigate } from "react-router-dom"

export function UserCreationPage() {
    const navigate = useNavigate();
    return (
        <div className={styles.content}>
            <button
                onClick={() => navigate(-1)}
                className="button_secondary icon_button">
                <img src={arrow}></img>
                Back
            </button>
            <h1 className="heading_1">Create user</h1>
            <UserForm />
        </div>
    )
}

