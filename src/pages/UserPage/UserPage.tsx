import { Link } from "react-router-dom"
import styles from "./UserPage.module.css"
import { ArrowNarrowLeft } from "@/assets/icons/ArrowNarrowLeft";
import { useTranslation } from "react-i18next"
import { Box, Button, Center, Spinner, Text } from "@chakra-ui/react";

import { useUserPage } from "./hooks/useUserPage";

export function UserPage() {
    const { t } = useTranslation("userPage");
    const {
        userInfoIsLoading,
        imgUrl,
        user
    } = useUserPage();

    return (
        <>
            <Link to={"/"}>
                <Button
                    variant="secondary">
                    <ArrowNarrowLeft />
                    {t("back_button")}
                </Button>
            </Link>

            {userInfoIsLoading
                ? <Center h="full" mt="150px">
                    <Spinner color="primary.500" />
                </Center>
                :
                <>
                    <h1 className="heading_1">
                        {t("page_heading", { name: `${user?.firstName}` })}
                    </h1>

                    <div className={styles.user_card}>
                        <Box
                            display="flex"
                            flexDirection={{ base: "column", md: "row" }}
                            gap="4"
                        >
                            <Box
                                alignSelf={{ base: "center", md: "auto" }}
                                width="150px"
                                height="150px"
                                borderRadius="lg"
                                bgColor="gray.300"
                                bgImage={`url(${imgUrl})`}>
                            </Box>

                            <Box >
                                <Text fontSize="2xl" fontWeight="600">{user?.firstName} {user?.lastName}</Text>

                                <Box mt="2">
                                    <Text><Text as="span" fontWeight="medium">{t("age")}</Text>{user?.age}</Text>
                                    <Text><Text as="span" fontWeight="medium">{t("email")}</Text>{user?.email}</Text>
                                    <Text><Text as="span" fontWeight="medium">{t("phone")}</Text>{user?.phone}</Text>
                                </Box>
                            </Box>
                        </Box>
                        <Link
                            to={`/editUser/${user?.id}`}
                            state={{ fromUserPage: true }}
                            className={`${styles.edit_button} link_wide_button`}>
                            <Button variant="primary" width="100%">
                                {t("edit_button")}
                            </Button>
                        </Link>
                    </div>
                </>}
        </ >
    )
}


