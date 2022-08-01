import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    body {
        padding-inline: 8rem;
        font-family: sans-serif;
        margin-bottom: 7rem;
    }
`