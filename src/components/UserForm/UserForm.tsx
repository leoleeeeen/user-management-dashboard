import { useTranslation } from "react-i18next"
import styles from "./UserForm.module.css"

export function UserForm() {
    const { t } = useTranslation("userForm");
    return (
        <form className={styles.form}>
            <div className={styles.inputs}>
                <label htmlFor="username"><strong>{t("name")}</strong>
                    <input
                        type="text"
                        id="username"
                        className="input" />
                </label>
                <label htmlFor="last_name"><strong>{t("last_name")}</strong>
                    <input
                        type="text"
                        id="last_name"
                        className="input" />
                </label>
                <label htmlFor="age"><strong>{t("age")}</strong>
                    <input
                        type="number"
                        id="age"
                        className="input" />
                </label>
                <label htmlFor="email"><strong>{t("email")}</strong>
                    <input
                        type="email"
                        id="email"
                        className="input" />
                </label>
                <label htmlFor="phone"><strong>{t("phone")}</strong>
                    <input
                        type="tel"
                        id="phone"
                        className="input" />
                </label>
            </div>
            <button className="button">{t("save_button")}</button>
        </form>
    )
}


