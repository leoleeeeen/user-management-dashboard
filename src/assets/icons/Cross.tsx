import { Icon } from "@chakra-ui/react";
import { SVG } from "./SVG";

export function Cross() {
    return (
        <Icon size="lg">
            <SVG
                width={30}
                height={30}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="#DBDBDB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
            </SVG>
        </Icon>
    )
}

