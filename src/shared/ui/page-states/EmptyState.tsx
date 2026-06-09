import { Center, EmptyState, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export function EmptyPageState() {
    const { t } = useTranslation("emptyState");

    return (
        <Center mt="12" flexDirection="column">
            <EmptyState.Root size="lg">
                <EmptyState.Content>
                    <VStack textAlign="center">
                        <EmptyState.Title>
                            {t("title")}
                        </EmptyState.Title>

                        <EmptyState.Description>
                            {t("description")}
                        </EmptyState.Description>
                    </VStack>
                </EmptyState.Content>
            </EmptyState.Root>
        </Center>
    )
}
