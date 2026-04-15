import { Portal, Select } from "@chakra-ui/react";
import { rowLimitListCollection } from "./LimitListCollection";

type PaginationDropDownProps = {
    limit: number;
    setLimit: React.Dispatch<React.SetStateAction<number>>;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

export function PaginationDropDown({ limit, setLimit, setPage }: PaginationDropDownProps) {

    const handleSetLimit = (value: number) => {
        setLimit(value);
        setPage(1);
    }

    return (
        <Select.Root collection={rowLimitListCollection} size="md" width="80px">
            <Select.HiddenSelect />

            <Select.Control >
                <Select.Trigger rounded="lg">
                    <Select.ValueText placeholder={limit.toString()} />
                </Select.Trigger>

                <Select.IndicatorGroup>
                    <Select.Indicator />
                </Select.IndicatorGroup>
            </Select.Control>

            <Portal>
                <Select.Positioner>
                    <Select.Content>
                        {rowLimitListCollection.items.map((limit) => (
                            <Select.Item item={limit} key={limit.value} onClick={() => handleSetLimit(limit.value)}>
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


