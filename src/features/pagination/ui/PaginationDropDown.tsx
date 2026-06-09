import { Portal, Select } from "@chakra-ui/react";
import type { UpdateParams } from "@/pages/users-page/model/useUsersPage";
import { cardLimitListCollection, rowLimitListCollection } from "../model/LimitListCollection";

type PaginationDropDownProps = {
    pageSize: number;
    updateParams: (params: UpdateParams) => void;
    isMobile: boolean;
}

export function PaginationDropDown({ pageSize, updateParams, isMobile }: PaginationDropDownProps) {
    const collection = isMobile ? cardLimitListCollection : rowLimitListCollection;

    return (
        <Select.Root collection={collection}
            size="md" width="80px">
            <Select.HiddenSelect />

            <Select.Control >
                <Select.Trigger rounded="lg">
                    <Select.ValueText placeholder={pageSize.toString()} />
                </Select.Trigger>

                <Select.IndicatorGroup>
                    <Select.Indicator />
                </Select.IndicatorGroup>
            </Select.Control>

            <Portal>
                <Select.Positioner>
                    <Select.Content>
                        {collection.items.map((limit) => (
                            <Select.Item
                                item={limit}
                                key={limit.value}
                                onClick={() => updateParams({ page: 1, pageSize: limit.value })}>
                                {limit.label}
                                <Select.ItemIndicator />
                            </Select.Item>
                        ))}
                    </Select.Content>
                </Select.Positioner>
            </Portal>
        </Select.Root>
    )
}


