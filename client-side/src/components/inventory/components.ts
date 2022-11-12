import styled from "styled-components";


export const ProductContainer = styled.div`
    display: flex;
    padding-block: 10px;
    flex-direction: column;
    gap: 20px;

    &:nth-child(even) {
        background: #EAEAEA;
    }
`

export const ProductBottomSide = styled.div`
    display: flex;
    width: 100%;
`
export const LeftProductContent = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
& > label {
    padding: 10px;
    border-radius: 10px;
    border: solid 1px gray;
    margin: 15px;
    & > img {
    width: 110px;
    height: 110px;
    border-radius: 10px;
    object-fit: cover;
}
};

`
export const RightProductContent = styled.div`
flex: 3;
display: flex;
flex-direction: column;
`

export const ActionButtons = styled.div`
    display: flex;
    & > button {
    padding: 10px 20px;
    margin: 5px;
    border-radius: 10px;
    border: none;
    background: rgb(51,102,51);
    color: white;
}
`

export const ItemRowInfoContainer = styled.div`
    display: flex;
    padding: 10px;
    gap: 10px;
`

export const ItemRowInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    & > label {
        font-size: 0.9em;
        color: gray;
        margin: 10px 0px;
    }
    & > input, select {
        width: 90%;
        border: none;
        border-bottom: solid 1px gray;
        outline: none;
        padding: 5px 10px;
        background: none;
    }

    & > select {
        border-radius: 0.1em;
    }
`