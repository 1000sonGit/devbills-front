import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: 0;
    }

    body {
        position: relative !important;
        overflow-x: hidden; /* Previne scroll horizontal */
        -webkit-font-smoothing: antialiased;
        background-color: ${theme.colors.black};
        min-height: 100vh;
    }
    /* Remove transform/overflow em elementos pais */
    #root, .App, main, section {
    transform: none !important;
    overflow: visible !important;
    }

    body, input, button, select {
        font: 1rem 'Lexend', sans-serif;
    }

    h1, h2, p, span, strong, button, label, input {
        line-height: 100%;
    }

    #root {
        max-width: 1280px;
        margin: 0 auto;
    }

    button {
        cursor: pointer;
    }

    [data-radix-portal] {
        display: flex !important;
    }
`