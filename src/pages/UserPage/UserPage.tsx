import { Link } from "react-router-dom"
import styles from "./UserPage.module.css"
import { ArrowNarrowLeft } from "@/assets/icons/ArrowNarrowLeft";
import { useTranslation } from "react-i18next"
import { Box, Button, DataList, Skeleton, Text } from "@chakra-ui/react";
import { useUserPage } from "./hooks/useUserPage";
import { ErrorStateComponent } from "@/components/ErrorStateComponent";
import { DeleteUser } from "@/assets/icons/DeleteUser";
import { useConfirmDeletion } from "@/hooks/useConfirmDeletion";
import { DeletionDialog } from "@/components/UI/DeletionDialog";

export function UserPage() {
    const { t } = useTranslation("userPage");
    const {
        userInfoIsLoading,
        isError,
        errorResponseMessage,
        refetch,
        user
    } = useUserPage();

    const { handleDeleteUser,
        handleConfirmDelete,
        handleCloseModal,
        isConfirmOpen
    } = useConfirmDeletion();

    return (
        <>
            <DeletionDialog confirm={handleConfirmDelete} cancel={handleCloseModal} isOpen={isConfirmOpen} />
            <Link to={"/"}>
                <Button
                    variant="secondary">
                    <ArrowNarrowLeft />
                    {t("back_button")}
                </Button>
            </Link>

            {isError
                ? <ErrorStateComponent refetch={refetch} errorResponseMessage={errorResponseMessage} />
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
                            <Skeleton
                                loading={userInfoIsLoading}
                                alignSelf={{ base: "center", md: "auto" }}
                                borderRadius="lg"
                                width="150px"
                                height="150px">
                                <Box
                                    width="150px"
                                    height="150px"
                                    borderRadius="lg"
                                    borderStyle="solid"
                                    borderWidth="1px"
                                    borderColor="gray.200"
                                    bgImage={`url(${user?.image})`}>
                                </Box>
                            </Skeleton>

                            <Box flex="1">
                                <Skeleton loading={userInfoIsLoading} height="36px">
                                    <Text fontSize="2xl" fontWeight="600">
                                        {user?.firstName} {user?.lastName}
                                    </Text>
                                </Skeleton>

                                <DataList.Root orientation="horizontal" size="lg" mt="2" gap="2">
                                    <DataList.Item
                                        minW="0"
                                        key={t("age")}
                                        flexDirection={{ base: "column", sm: "row" }}
                                        alignItems={{ base: "flex-start", sm: "center" }}
                                        gap={{ base: 1, sm: 4 }}>
                                        <DataList.ItemLabel color="black" minW="70px" fontWeight="600">
                                            {t("age")}
                                        </DataList.ItemLabel>

                                        {userInfoIsLoading
                                            ? <Skeleton height="24px" width="40px" />
                                            : <DataList.ItemValue>{user?.age}</DataList.ItemValue>}
                                    </DataList.Item>

                                    <DataList.Item
                                        minW="0"
                                        key={t("email")}
                                        flexDirection={{ base: "column", sm: "row" }}
                                        alignItems={{ base: "flex-start", sm: "center" }}
                                        gap={{ base: 1, sm: 4 }}>
                                        <DataList.ItemLabel color="black" minW="70px" fontWeight="600">
                                            {t("email")}
                                        </DataList.ItemLabel>

                                        {userInfoIsLoading
                                            ? <Skeleton
                                                height="24px"
                                                width={{ base: "100%", sm: "auto" }}
                                                flex={{ base: "none", sm: "1" }} />
                                            : <DataList.ItemValue>{user?.email}</DataList.ItemValue>}
                                    </DataList.Item>

                                    <DataList.Item
                                        key={t("phone")}
                                        flexDirection={{ base: "column", sm: "row" }}
                                        alignItems={{ base: "flex-start", sm: "center" }}
                                        gap={{ base: 1, sm: 4 }}>
                                        <DataList.ItemLabel color="black" minW="70px" fontWeight="600">
                                            {t("phone")}
                                        </DataList.ItemLabel>

                                        {userInfoIsLoading
                                            ? <Skeleton
                                                height="24px"
                                                width={{ base: "100%", sm: "auto" }}
                                                flex={{ base: "none", sm: "1" }} />
                                            : <DataList.ItemValue>{user?.phone}</DataList.ItemValue>}
                                    </DataList.Item>
                                </DataList.Root>
                            </Box>
                        </Box>
                        <Box className={`${styles.buttons}`}>
                            <Link
                                to={`/editUser/${user?.id}`}
                                state={{ fromUserPage: true }}
                                className={`link_wide_button`}>
                                <Button
                                    variant="primary"
                                    width="100%"
                                    disabled={userInfoIsLoading ? true : false}
                                    _disabled={{ opacity: 1 }}>
                                    {t("edit_button")}
                                </Button>
                            </Link>
                            <Button
                                onClick={user
                                    ? () => handleDeleteUser(user.id)
                                    : () => { }}
                                disabled={userInfoIsLoading ? true : false}
                                _disabled={{ opacity: 1 }}
                                variant="delete"
                                px="10px"
                            >
                                <DeleteUser />
                            </Button>
                        </Box>
                    </div>
                </>}
        </ >
    )
}


