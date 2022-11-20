import styled, { createGlobalStyle } from "styled-components";

export const StoreGlobalStyles = createGlobalStyle`
body {
}
`
export const StoreContainer = styled.div`

`

export const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 350px;
    background: rgb(232,241,243);
    gap: 25px;
    padding: 50px 20px;
`