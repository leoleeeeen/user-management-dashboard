import { ArrowNarrowLeft } from "@/assets/icons/ArrowNarrowLeft";
import { UserForm } from "@/components/UserForm";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"
import { Button, Text } from "@chakra-ui/react";
import { useCreateUser } from "@/api/createUser/useCreateUser";
import { TOASTS } from "@/components/UI/Toaster/toastMessages";

export function UserCreationPage() {
    const { t } = useTranslation("userCreationPage");

    const {
        mutate,
        isPending
    } = useCreateUser();

    return (
        <>
            <Link to={"/"}>
                <Button
                    variant="secondary">
                    <ArrowNarrowLeft />
                    {t("back_button")}
                </Button>
            </Link>

            <Text className="heading_1 text_center">
                {t("page_heading")}
            </Text>

            <UserForm
                mode="create"
                mutate={mutate}
                isPending={isPending}
                toastMessage={TOASTS.USER_CREATED} />
        </ >
    )
}

