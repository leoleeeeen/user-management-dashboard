import { Skeleton, Table } from "@chakra-ui/react";

export function SkeletonRow() {
    return (
        <Table.Row h="48px">
            <Table.Cell><Skeleton height="40px" /></Table.Cell>
            <Table.Cell><Skeleton height="40px" /></Table.Cell>
            <Table.Cell><Skeleton height="40px" /></Table.Cell>
            <Table.Cell><Skeleton height="40px" /></Table.Cell>
        </Table.Row>
    )
}
