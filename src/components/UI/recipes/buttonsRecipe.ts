import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
    base: {
        borderRadius: "lg",
        fontWeight: 400,
        border: "none"
    },
    variants: {
        variant: {
            primary: {
                bg: "primary.500",
                color: "white",
                _hover: {
                    bg: "primary.600",
                },
            },
            secondary: {
                bg: "secondary.500",
                color: "black",
                _hover: {
                    bg: "secondary.600",
                },
            },
            lang: {
                fontWeight: "600",
                bg: "none",
                color: "white",
                px: "0",
                py: "0"
            },
        },
        size: {
            md: {
                px: "3",
                py: "2.5",
                fontSize: "md",
                height: "auto"
            }
        }
    }
});

