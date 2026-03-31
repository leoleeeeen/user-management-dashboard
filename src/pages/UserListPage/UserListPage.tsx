import { Link } from "react-router-dom"
import styles from "./UserListPage.module.css"
import { UserList } from "@/components/UserList"
import { useTranslation } from "react-i18next"

export function UserListPage() {
    const { t } = useTranslation("userListPage");
    return (
        <div className={styles.content}>
            <form className={styles.search_form}>
                <input className="input" placeholder={t("search_placeholder")} />
                <button className="button">{t("search_button")}</button>
            </form>
            <Link to={"createUser"}>
                <button className={`button ${styles.createUser_button}`}>
                    {t("create_user_button")}
                </button>
            </Link>
            <UserList />
        </div>
    )
}

