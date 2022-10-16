import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        text-decoration: none;
        color: black;
        scroll-behavior: smooth;
        font-family: 'poppins', 'roboto', sans-serif;
    }
`

export const MainApp = styled.main`

`