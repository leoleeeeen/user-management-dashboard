import { CrossIcon } from "@/shared/ui/icons/CrossIcon";
import { Group, Input, Button, Spinner } from "@chakra-ui/react";
import type { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

type SearchBarProps = {
    handleSearchSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
    searchInput: string;
    setSearchInput: Dispatch<SetStateAction<string>>;
    handleClear: () => void;
    isLoading: boolean;
}

export function SearchBar({
    handleSearchSubmit,
    searchInput,
    setSearchInput,
    handleClear,
    isLoading }: SearchBarProps) {
    const { t } = useTranslation("userListPage");

    return (
        <form onSubmit={(e) => handleSearchSubmit(e)}>
            <Group attached w="full" position="relative">
                <Input
                    placeholder={t("search_placeholder")}
                    className="search_input"
                    onChange={e => setSearchInput(e.target.value)}
                    value={searchInput}
                />

                <Button
                    onClick={handleClear}
                    variant="icon"
                    position="absolute"
                    right="75px"
                    zIndex="1">
                    <CrossIcon />
                </Button>

                <Button
                    loading={isLoading ? true : false}
                    spinner={<Spinner size="sm" color="gray" />}
                    disabled={isLoading ? true : false}
                    _disabled={{ opacity: 1 }}
                    width="18"
                    type="submit"
                    variant="secondary"
                    alignSelf="stretch">
                    {t("search_button")}
                </Button>
            </Group>
        </form>
    )
}
