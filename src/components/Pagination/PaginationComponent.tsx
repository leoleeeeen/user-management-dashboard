import { ChevronLeft } from "@/assets/icons/ChevronLeft";
import { ChevronRight } from "@/assets/icons/ChevronRight";
import { Center, ButtonGroup, IconButton, Pagination } from "@chakra-ui/react";

type PaginationProps = {
    page: number;
    pages: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

export function PaginationComponent({ page, pages, setPage }: PaginationProps) {
    return (
        <Center mt="5">
            <Pagination.Root
                count={pages}
                pageSize={1}
                page={page}
                onPageChange={(e) => setPage(e.page)}
            >
                <ButtonGroup variant="ghost" size="lg">
                    <Pagination.PrevTrigger asChild>
                        <IconButton>
                            <ChevronLeft />
                        </IconButton>
                    </Pagination.PrevTrigger>
                    <Pagination.Items
                        render={(item) => (
                            <IconButton
                                variant={item.value === page ? "outline" : "ghost"}>
                                {item.value}
                            </IconButton>
                        )}
                    />
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
