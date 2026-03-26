import { UserForm } from "@/components/UserForm/UserForm"
import styles from "./UserEditionPage.module.css"
import arrow from "@/assets/images/arrow-narrow-left.svg"
import { useNavigate } from "react-router-dom";


export function UserEditionPage() {
    const navigate = useNavigate();
    return (
        <div className={styles.content}>
            <button
                onClick={() => navigate(-1)}
                className="button_secondary icon_button">
                <img src={arrow}></img>
                Back
            </button>
            <h1 className="heading_1">Edit user</h1>
            <UserForm />
        </div>
    )
}



