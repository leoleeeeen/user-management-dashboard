import { useTranslation } from "react-i18next"
import styles from "./Header.module.css"
import { Link } from "react-router-dom";

export function Header() {
    const { i18n } = useTranslation();

    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <Link to="/"><p className={styles.project_name}>User Management Dashboard</p></Link>
                <div className={styles.lang_buttons}>
                    <button
                        onClick={() => i18n.changeLanguage("en")}
                        className={i18n.language === "en"
                            ? styles.lang_btn_active
                            : ""}>
                        EN
                    </button>
                    /
                    <button
                        onClick={() => i18n.changeLanguage("ru")}
                        className={i18n.language === "ru"
                            ? styles.lang_btn_active
                            : ""}>
                        RU
                    </button>
                </div>
            </div>
        </header>
    )
}


