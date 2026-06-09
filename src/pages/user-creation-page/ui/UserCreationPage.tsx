import { ArrowNarrowLeftIcon } from "@/shared/ui/icons/ArrowNarrowLeftIcon";
import { UserForm } from "@/entities/user";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"
import { Button, Text } from "@chakra-ui/react";
import { useUserCreationPage } from "../model/useUserCreationPage";

export function UserCreationPage() {
    const { t } = useTranslation("userCreationPage");

    const { isPending, onSubmit, form } = useUserCreationPage();

    return (
        <>
            <Link to={"/"}>
                <Button
                    variant="secondary">
                    <ArrowNarrowLeftIcon />
                    {t("back_button")}
                </Button>
            </Link>

            <Text className="heading_1 text_center">
                {t("page_heading")}
            </Text>

            <UserForm
                form={form}
                onSubmit={onSubmit}
                isPending={isPending}
            />
        </ >
    )
}

