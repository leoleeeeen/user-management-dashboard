import { ChevronLeft } from "@/assets/icons/ChevronLeft";
import { ChevronRight } from "@/assets/icons/ChevronRight";
import { Center, ButtonGroup, IconButton, Pagination, useBreakpointValue } from "@chakra-ui/react";

type PaginationProps = {
    page: number;
    pages: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

export function PaginationComponent({ page, pages, setPage }: PaginationProps) {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Center mt="8">
            <Pagination.Root
                count={pages}
                pageSize={1}
                page={page}
                onPageChange={(e) => setPage(e.page)}
            >
                <ButtonGroup variant="ghost" size={{ base: "md", md: "lg" }}>
                    <Pagination.PrevTrigger asChild>
                        <IconButton>
                            <ChevronLeft />
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
                            <ChevronRight />
                        </IconButton>
                    </Pagination.NextTrigger>
                </ButtonGroup>
            </Pagination.Root>
        </Center>
    )
}
