import { createSystem, defaultConfig } from "@chakra-ui/react";
import { buttonRecipe } from "../../styles/buttonsRecipe";
// import { inputRecipe } from "./recipes/inputRecipe";

export const system = createSystem(defaultConfig, {
    theme: {
        tokens: {
            colors: {
                primary: {
                    500: { value: "#7783F7" },
                    600: { value: "#6773E0" },
                },
                secondary: {
                    500: { value: "#DBDBDB" },
                    600: { value: "#CFCFCF" },
                }
            }
        },
        recipes: {
            button: buttonRecipe,
        }
    }
});



