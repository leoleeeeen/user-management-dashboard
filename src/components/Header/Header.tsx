import { useTranslation } from "react-i18next"
import styles from "./Header.module.css"
import { Link } from "react-router-dom";
import { Button, Text } from "@chakra-ui/react";

export function Header() {
    const { i18n } = useTranslation();

    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <Link to="/">
                    <Text color="white" fontWeight="500" fontSize="2xl">
                        User Management Dashboard
                    </Text>
                </Link>
                <div className={styles.lang_buttons}>
                    <Button
                        variant="lang"
                        onClick={() => i18n.changeLanguage("en")}
                        className={i18n.language === "en"
                            ? styles.lang_btn_active
                            : ""}>
                        EN
                    </Button>
                    <Text color="white" as="span">/</Text>
                    <Button
                        variant="lang"
                        onClick={() => i18n.changeLanguage("ru")}
                        className={i18n.language === "ru"
                            ? styles.lang_btn_active
                            : ""}>
                        RU
                    </Button>
                </div>
            </div>
        </header>
    )
}


