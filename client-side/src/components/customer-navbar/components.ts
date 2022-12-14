import styled from "styled-components";

export const CustomerNavbarContainer = styled.div`
    display: flex;
    height: 90px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    /* box-shadow: 1px 3px 5px #EAEAEA; */
`

export const CustomerLinks = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    padding-inline:20px;

    & > a {
        padding: 10px ;
        margin: 5px;
        font-size: 0.9em;
    }
`

export const UserProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    padding-inline: 30px;
`

export const Cart = styled.div`
    padding: 5px 20px;
    border: solid 2px black;
    border-radius: 10px;
    & > .title {
        padding-inline:10px;
        font-size: 0.9em;
    }
    & > .cart__number {
        padding: 0px 5px;
        background: black;
        border-radius: 10px;
        color: white;
        font-size: 0.9em;
    }
`
export const User = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.3em;

    & > .icon-container {
        padding:7px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        cursor: pointer;

        &:hover {
            background: #EAEAEA;

        }
    }
`

export const PhotoBorder = styled.div`
    border-radius: 50%;
    width: fit-content;
    height: fit-content;
    width: 50px;
    height: 50px;
    border: solid 1px gray;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Photo = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`