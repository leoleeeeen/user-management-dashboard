import { Portal, Select } from "@chakra-ui/react";
import { rowLimitListCollection } from "./LimitListCollection";
import type { UpdateParams } from "@/pages/UserListPage/hooks/useUserListPage";

type PaginationDropDownProps = {
    pageSize: number;
    updateParams: (params: UpdateParams) => void;
}

export function PaginationDropDown({ pageSize, updateParams }: PaginationDropDownProps) {

    return (
        <Select.Root collection={rowLimitListCollection} size="md" width="80px">
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
                        {rowLimitListCollection.items.map((limit) => (
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


