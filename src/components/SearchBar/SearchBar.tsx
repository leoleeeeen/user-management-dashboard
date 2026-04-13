import { Cross } from "@/assets/icons/Cross";
import { Group, Input, Button } from "@chakra-ui/react";
import type { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

type SearchBarProps = {
    handleSearchSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
    searchInput: string;
    setSearchInput: Dispatch<SetStateAction<string>>;
    handleClear: () => void;
}

export function SearchBar({
    handleSearchSubmit,
    searchInput,
    setSearchInput,
    handleClear }: SearchBarProps) {
    const { t } = useTranslation("userListPage");

    return (
        <form onSubmit={(e) => handleSearchSubmit(e)}>
            <Group attached w="full" position="relative">
                <Input
                    placeholder={t("search_placeholder")}
                    className="input"
                    onChange={e => setSearchInput(e.target.value)}
                    value={searchInput}
                />

                <Button
                    onClick={handleClear}
                    variant="icon"
                    position="absolute"
                    right="75px"
                    zIndex="1">
                    <Cross />
                </Button>

                <Button
                    type="submit"
                    variant="secondary"
                    alignSelf="stretch">
                    {t("search_button")}
                </Button>
            </Group>
        </form>
    )
}
