import { Link, useParams } from "react-router-dom"
import styles from "./UserPage.module.css"
import { ArrowNarrowLeft } from "@/assets/icons/ArrowNarrowLeft";
import { useTranslation } from "react-i18next"
import { Box, Button, Center, Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/api/getUser";
import { getUserImg } from "@/api/getUserImg";
import { useEffect, useMemo } from "react";

export function UserPage() {
    const { t } = useTranslation("userPage");
    const userId = useParams().userId;

    if (!userId) {
        throw new Error('userId is required');
    }

    const {
        data: user,
        isLoading: userInfoIsLoading
    } = useQuery({
        queryKey: ["user", userId],
        queryFn: () => getUser(userId),
        placeholderData: undefined
    })


    const { data: blob } = useQuery({
        enabled: !!user,
        queryKey: ["userImg"],
        queryFn: () => {
            if (!user?.firstName) {
                throw new Error("firstName is required");
            }
            return getUserImg(user?.firstName);
        },
    });

    const imgUrl = useMemo(() => {
        if (!blob) return undefined;
        return URL.createObjectURL(blob);
    }, [blob]);



    useEffect(() => {
        return () => {
            if (imgUrl) {
                URL.revokeObjectURL(imgUrl);
            }
        };
    }, [imgUrl]);

    return (
        <div className="content">
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
                    <h1 className="heading_1">{t("page_heading", { name: `${user?.firstName}` })}</h1>
                    <div className={styles.user_card}>
                        <Box display="flex">
                            <Box
                                width="150px"
                                height="150px"
                                borderRadius="lg"
                                bgColor="gray.300"
                                bgImage={`url(${imgUrl})`}></Box>
                            <Box ml="4">
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
                            className={styles.edit_button}>
                            <Button variant="primary">
                                {t("edit_button")}
                            </Button>
                        </Link>
                    </div>
                </>}

        </div >
    )
}


