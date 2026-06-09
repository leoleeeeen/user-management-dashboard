import { ArrowNarrowLeftIcon } from "@/shared/ui/icons/ArrowNarrowLeftIcon";
import { UserForm } from "@/entities/user";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { Button, Text } from "@chakra-ui/react";
import { useUserEditionPage } from "../model/useUserEditionPage";

export function UserEditionPage() {
    const { state } = useLocation();
    const { t } = useTranslation("userEditionPage");

    const {
        isPending,
        onSubmit,
        form,
        userId
    } = useUserEditionPage()


    return (
        <>
            <Link
                to={state.fromUserPage
                    ? `/userPage/${userId}`
                    : "/"}
            >
                <Button variant="secondary">
                    <ArrowNarrowLeftIcon />
                    {t("back_button")}
                </Button>
            </Link>

            <Text className="heading_1 text_center">{t("page_heading")}</Text>

            <UserForm
                isPending={isPending}
                form={form}
                onSubmit={onSubmit} />
        </>
    )
}



