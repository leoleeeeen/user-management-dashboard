import { Link } from "react-router-dom"
import styles from "./UserPage.module.css"
import { ArrowNarrowLeft } from "@/assets/icons/ArrowNarrowLeft";
import { useTranslation } from "react-i18next"
import { Box, Button, Skeleton, Text } from "@chakra-ui/react";
import { useUserPage } from "./hooks/useUserPage";
import { ErrorStateComponent } from "@/components/ErrorStateComponent";

export function UserPage() {
    const { t } = useTranslation("userPage");
    const {
        userInfoIsLoading,
        userImgIsLoading,
        isError,
        refetch,
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

            {isError
                ? <ErrorStateComponent refetch={refetch} />
                : <>
                    <Skeleton height="45px" loading={userInfoIsLoading} >
                        <Text
                            mt="5"
                            fontWeight="800"
                            fontSize="3xl"
                        >
                            {t("page_heading", { name: `${user?.firstName}` })}
                        </Text>
                    </Skeleton>

                    <div className={styles.user_card}>
                        <Box
                            display="flex"
                            flexDirection={{ base: "column", md: "row" }}
                            gap="4"
                            flex="1"
                        >
                            <Skeleton loading={userInfoIsLoading || userImgIsLoading} borderRadius="lg">
                                <Box
                                    alignSelf={{ base: "center", md: "auto" }}
                                    width="150px"
                                    height="150px"
                                    borderRadius="lg"
                                    bgColor="gray.300"
                                    bgImage={`url(${imgUrl})`}>
                                </Box>
                            </Skeleton>

                            <Box flex="1">
                                <Skeleton loading={userInfoIsLoading} height="36px">
                                    <Text fontSize="2xl" fontWeight="600">
                                        {user?.firstName} {user?.lastName}
                                    </Text>
                                </Skeleton>

                                <Box mt="4" display="flex" flexDirection="column" gap="2">
                                    <Box display="flex" gap='2'>
                                        <Text as="span" fontWeight="medium">
                                            {t("age")}
                                        </Text>

                                        <Skeleton
                                            loading={userInfoIsLoading}
                                            height="24px"
                                            width="40px"
                                        >
                                            <Text as="span">{user?.age}</Text>
                                        </Skeleton>
                                    </Box>
                                    <Box display="flex" gap='2'>
                                        <Text as="span" fontWeight="medium">
                                            {t("email")}
                                        </Text>

                                        <Skeleton
                                            loading={userInfoIsLoading}
                                            height="24px"
                                            width="50%"
                                        >
                                            <Text as="span">{user?.email}</Text>
                                        </Skeleton>
                                    </Box>
                                    <Box display="flex" gap='2'>
                                        <Text as="span" fontWeight="medium">
                                            {t("phone")}
                                        </Text>

                                        <Skeleton
                                            loading={userInfoIsLoading}
                                            height="24px"
                                            width="50%"
                                        >
                                            <Text as="span">{user?.phone}</Text>
                                        </Skeleton>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Link
                            to={`/editUser/${user?.id}`}
                            state={{ fromUserPage: true }}
                            className={`${styles.edit_button} link_wide_button`}>
                            <Button
                                variant="primary"
                                width="100%"
                                disabled={userInfoIsLoading ? true : false}
                                _disabled={{ opacity: 1 }}>
                                {t("edit_button")}
                            </Button>
                        </Link>
                    </div>
                </>}
        </ >
    )
}


