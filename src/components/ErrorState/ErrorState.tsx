import type { UsersData } from "@/api/getUsers";
import { Center, Button, Text } from "@chakra-ui/react";
import type { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

type ErrorStateProps = {
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<UsersData, Error>>;
}

export function ErrorState({ refetch }: ErrorStateProps) {
    return (
        <Center mt="12" flexDirection="column">
            <Text fontSize="xl" fontWeight="600">
                Something went wrong
            </Text>

            <Button
                variant="primary"
                onClick={() => refetch()}
                mt="2">
                Retry
            </Button>
        </Center>
    )
}
