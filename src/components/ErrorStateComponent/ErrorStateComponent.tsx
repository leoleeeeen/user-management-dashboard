import type { UsersData } from "@/api/getUsers/types";
import { Center, Button, EmptyState, VStack } from "@chakra-ui/react";
import type { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

type ErrorStateProps = {
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<UsersData, Error>>;
}

export function ErrorState({ refetch }: ErrorStateProps) {
    const { t } = useTranslation("errorState")

    return (
        <Center mt="12" flexDirection="column">
            <EmptyState.Root size="lg">
                <EmptyState.Content>
                    <VStack textAlign="center">
                        <EmptyState.Title>
                            {t("title")}
                        </EmptyState.Title>

                        <Button
                            variant="primary"
                            onClick={() => refetch()}
                            mt="2">
                            {t("retry_button")}
                        </Button>
                    </VStack>
                </EmptyState.Content>
            </EmptyState.Root>
        </Center>
    )
}
