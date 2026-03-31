import { Link } from "react-router-dom"
import styles from "./UserCard.module.css"
import { useTranslation } from "react-i18next"

export function UserCard() {
    const { t } = useTranslation("userCard");
    return (
        <div className={styles.user_card}>
            <span><strong>Pupa</strong>, 18 Lupa@email.ru</span>
            <div className={styles.button_container}>
                <Link to={"userPage/0"}><button className="button">{t("view_button")}</button></Link>
                <Link
                    to={"editUser/0"}
                    state={{ fromUserPage: false }}>
                    <button className="button_secondary">
                        {t("edit_button")}
                    </button>
                </Link>
            </div>
        </div>
    )
}
