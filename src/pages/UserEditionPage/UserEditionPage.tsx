import styles from "./UserEditionPage.module.css"
import arrow from "@/assets/icons/arrow-narrow-left.svg"
import { UserForm } from "@/components/UserForm";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

export function UserEditionPage() {
    const { state } = useLocation();
    const { t } = useTranslation("userEditionPage");
    return (
        <div className={styles.content}>
            <Link
                to={state.fromUserPage
                    ? `/userPage/0`
                    : "/"}
            >
                <button className="button_secondary icon_button">
                    <img src={arrow} />
                    {t("back_button")}
                </button>
            </Link>
            <h1 className="heading_1 text_center">{t("page_heading")}</h1>
            <UserForm />
        </div>
    )
}



