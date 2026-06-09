import { ChevronLeftIcon } from "@/shared/ui/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@/shared/ui/icons/ChevronRightIcon";
import { Center, ButtonGroup, IconButton, Pagination, useBreakpointValue, Text } from "@chakra-ui/react";
import type { UpdateParams } from "@/pages/users-page/model/useUsersPage";
import { useTranslation } from "react-i18next";
import { PaginationDropDown } from "./PaginationDropDown";

type PaginationProps = {
    page: number;
    pages: number;
    pageSize: number;
    updateParams: (params: UpdateParams) => void;
}

export function PaginationComponent({ page, pages, updateParams, pageSize }: PaginationProps) {
    const isMobile = useBreakpointValue({ base: true, md: false }) || false;
    const { t } = useTranslation("userListPage");

    return (
        <Center mt="8">
            <Pagination.Root
                count={pages}
                pageSize={1}
                page={page}
                onPageChange={(e) => updateParams({ page: e.page })}
            >
                <ButtonGroup variant="ghost" size={{ base: "md", md: "lg" }}>
                    <PaginationDropDown
                        pageSize={pageSize}
                        updateParams={updateParams}
                        isMobile={isMobile}
                    />

                    <Pagination.PrevTrigger asChild>
                        <IconButton>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Pagination.PrevTrigger>

                    {isMobile
                        ? <Text fontWeight="600">
                            {page} {t("mobile_pagination_text")} {pages}
                        </Text>
                        : <Pagination.Items
                            render={(item) => (
                                <IconButton
                                    variant={item.value === page ? "outline" : "ghost"}>
                                    {item.value}
                                </IconButton>
                            )}
                        />}

                    <Pagination.NextTrigger asChild>
                        <IconButton>
                            <ChevronRightIcon />
                        </IconButton>
                    </Pagination.NextTrigger>
                </ButtonGroup>
            </Pagination.Root>
        </Center>
    )
}
