import { ArrowNarrowLeft } from "@/assets/icons/ArrowNarrowLeft";
import { UserForm } from "@/components/UserForm";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"
import { Button, Text } from "@chakra-ui/react";

export function UserCreationPage() {
    const { t } = useTranslation("userCreationPage");
    return (
        <div className="content">
            <Link to={"/"}>
                <Button
                    variant="secondary">
                    <ArrowNarrowLeft />
                    {t("back_button")}
                </Button>
            </Link>
            <Text className="heading_1 text_center">{t("page_heading")}</Text>
            <UserForm />
        </div >
    )
}

