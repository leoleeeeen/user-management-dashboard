import { Link } from "react-router-dom"
import styles from "./UserPage.module.css"
import { ArrowNarrowLeft } from "@/assets/icons/ArrowNarrowLeft";
import { useTranslation } from "react-i18next"

export function UserPage() {
    const { t } = useTranslation("userPage");
    return (
        <div className={styles.content}>
            <Link to={"/"}>
                <button
                    className="button_secondary icon_button">
                    <ArrowNarrowLeft />
                    {t("back_button")}
                </button>
            </Link>
            <h1 className="heading_1">{t("page_heading", { name: "Pupa" })}</h1>
            <div className={styles.user_card}>
                <div>
                    <p><strong>{t("name")}</strong>Pupa</p>
                    <p><strong>{t("last_name")}</strong>Pupkin</p>
                    <p><strong>{t("email")}</strong>Lupa@email.ru</p>
                    <p><strong>{t("age")}</strong>18</p>
                    <p><strong>{t("phone")}</strong>123456</p>
                </div>
                <Link
                    to={"/editUser/0"}
                    state={{ fromUserPage: true }}
                    className={styles.edit_button}>
                    <button className="button">
                        {t("edit_button")}
                    </button>
                </Link>
            </div>
        </div>
    )
}


