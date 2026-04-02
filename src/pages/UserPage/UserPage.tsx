import { Link } from "react-router-dom"
import styles from "./UserPage.module.css"
import { ArrowNarrowLeft } from "@/assets/icons/ArrowNarrowLeft";
import { useTranslation } from "react-i18next"
import { Box, Button, Text } from "@chakra-ui/react";

export function UserPage() {
    const { t } = useTranslation("userPage");
    return (
        <div className="content">
            <Link to={"/"}>
                <Button
                    variant="secondary">
                    <ArrowNarrowLeft />
                    {t("back_button")}
                </Button>
            </Link>
            <h1 className="heading_1">{t("page_heading", { name: "Pupa" })}</h1>
            <div className={styles.user_card}>
                <Box display="flex">
                    <Box width="150px" height="150px" borderRadius="lg" bgColor="gray.300"></Box>
                    <Box ml="4">
                        <Text fontSize="2xl" fontWeight="600">Pupa Pupkin</Text>
                        <Box mt="2">
                            <Text><Text as="span" fontWeight="medium">{t("age")}</Text>18</Text>
                            <Text><Text as="span" fontWeight="medium">{t("email")}</Text>Lupa@email.ru</Text>
                            <Text><Text as="span" fontWeight="medium">{t("phone")}</Text>123456</Text>
                        </Box>
                    </Box>
                </Box>
                <Link
                    to={"/editUser/0"}
                    state={{ fromUserPage: true }}
                    className={styles.edit_button}>
                    <Button variant="primary">
                        {t("edit_button")}
                    </Button>
                </Link>
            </div>
        </div >
    )
}


