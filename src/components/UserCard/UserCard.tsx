import { Link } from "react-router-dom"
import styles from "./UserCard.module.css"
import { useTranslation } from "react-i18next"
import { Button, Text } from "@chakra-ui/react";

export function UserCard() {
    const { t } = useTranslation("userCard");
    return (
        <div className={styles.user_card}>
            <Text>
                <Text as="span" fontWeight="medium">
                    Pupa
                </Text>
                , 18 Lupa@email.ru
            </Text>
            <div className={styles.button_container}>
                <Link to={"userPage/0"}>
                    <Button variant="primary">
                        {t("view_button")}
                    </Button>
                </Link>
                <Link
                    to={"editUser/0"}
                    state={{ fromUserPage: false }}>
                    <Button variant="secondary">
                        {t("edit_button")}
                    </Button>
                </Link>
            </div>
        </div>
    )
}
