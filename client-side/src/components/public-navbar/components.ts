import styled from "styled-components";

export const PublicNavbarContainer = styled.nav`
    display: flex;
    height: 90px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    background: white;
    top: 0;
    left: 0;
    padding-inline: 50px;
    z-index: 1;
    & > img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }
`

export const Links = styled.div`
    display: flex;
    & > a {
        font-size: 1.3em;
        margin-inline: 10px;
        color: rgb(51,102,51);
    }
`