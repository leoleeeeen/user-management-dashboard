import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
    base: {
        borderRadius: "lg",
        fontWeight: 400,
    },
    variants: {
        variant: {
            primary: {
                bg: "primary.500",
                color: "white",
                border: "none",
                _hover: {
                    bg: "primary.600",
                },
            },
            secondary: {
                bg: "secondary.500",
                color: "black",
                border: "none",
                _hover: {
                    bg: "secondary.600",
                },
            },
            icon: {
                bg: "none",
                p: "0"
            },
            lang: {
                fontWeight: "600",
                bg: "none",
                color: "white",
                p: "0"
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

