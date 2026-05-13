import { ChevronLeftIcon } from "@/assets/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@/assets/icons/ChevronRightIcon";
import { Center, ButtonGroup, IconButton, Pagination, useBreakpointValue } from "@chakra-ui/react";
import { PaginationDropDown } from "./PaginationDropDown";
import type { UpdateParams } from "@/pages/UsersPage/hooks/useUsersPage";

type PaginationProps = {
    page: number;
    pages: number;
    pageSize: number;
    updateParams: (params: UpdateParams) => void;
}

export function PaginationComponent({ page, pages, updateParams, pageSize }: PaginationProps) {
    const isMobile = useBreakpointValue({ base: true, md: false });

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
                    />

                    <Pagination.PrevTrigger asChild>
                        <IconButton>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Pagination.PrevTrigger>

                    {isMobile
                        ? <Pagination.PageText />
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
