import { createGlobalStyle } from "styled-components";
import { devices } from "./mediaqueries";

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    body {
        width: 85%;
        margin-inline: auto;
        font-family: sans-serif;
        margin-bottom: 7rem;

        @media ${devices.mobileL} {
            width: 90%;
        }

        /* @media (max-width: 768px) {
            display: flex;
            width: 100vw;
            height: 100vh;
            justify-content: center;
            align-items: center;
            background-color: #333;
            color: #eee;
            padding: 4rem;
        } */
    }
`