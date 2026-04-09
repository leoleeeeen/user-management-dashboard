import { Table } from "@chakra-ui/react";

export function EmptyRow() {
    return (
        <Table.Row h="65px">
            <Table.Cell colSpan={4} />
        </Table.Row>
    )
}
