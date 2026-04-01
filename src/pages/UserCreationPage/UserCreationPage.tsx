import { ArrowNarrowLeft } from "@/assets/icons/ArrowNarrowLeft";
import styles from "./UserCreationPage.module.css"
import { UserForm } from "@/components/UserForm";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"

export function UserCreationPage() {
    const { t } = useTranslation("userCreationPage");
    return (
        <div className={styles.content}>
            <Link to={"/"}>
                <button
                    className="button_secondary icon_button">
                    <ArrowNarrowLeft />
                    {t("back_button")}
                </button>
            </Link>
            <h1 className="heading_1 text_center">{t("page_heading")}</h1>
            <UserForm />
        </div>
    )
}

