import { ArrowNarrowLeft } from "@/assets/icons/ArrowNarrowLeft";
import { UserForm } from "@/components/UserForm";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useParams } from "react-router-dom";
import { Button, Text } from "@chakra-ui/react";

export function UserEditionPage() {
    const { state } = useLocation();
    const { t } = useTranslation("userEditionPage");

    const userId = useParams().userId;

    if (!userId) {
        throw new Error('userId is required');
    }

    return (
        <>
            <Link
                to={state.fromUserPage
                    ? `/userPage/${userId}`
                    : "/"}
            >
                <Button variant="secondary">
                    <ArrowNarrowLeft />
                    {t("back_button")}
                </Button>
            </Link>

            <Text className="heading_1 text_center">{t("page_heading")}</Text>

            <UserForm />
        </>
    )
}



