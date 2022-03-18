import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #040817;
        --bloom-red: #E71B40;
        --bloom-blue: #106781;
    }
    html {
        background: var(--background);
    }

    h1 {
        color: #fff;
    }
`;