import { createListCollection } from "@chakra-ui/react";

export const ROW_LIMIT = [5, 10, 20, 50, 100];

export const rowLimitListCollection = createListCollection({
    items: [
        ...ROW_LIMIT.map((item) => {
            return {
                label: item.toString(),
                value: item
            }
        })
    ]
})
