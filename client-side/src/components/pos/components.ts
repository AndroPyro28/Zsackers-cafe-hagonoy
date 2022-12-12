import styled from "styled-components";


export const FilterItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
`

export const Search = styled.div`
    width: 100%;
    border: solid 1px rgb(56,77,38);
    display: flex;
    padding: 0px 10px;
    align-items: center;
    border-radius: 5px;

    & > label {
        color: gray;
    }
    & > input {
        flex: 1;
        padding: 5px 10px;
        width: 100%;
        outline: none;
        background: none;
        border: none;
    }
`



export const CategoryList = styled.div`
    display: flex;
    margin: 10px;
    justify-content: flex-start;
    gap: 10px;
`

export const Category = styled.span`
    max-width: 200px;
    padding: 5px 20px;
    border-radius: 20px;
    font-size: 0.9em;
    text-align: center;
    border: solid 1px rgb(56,77,38);
    color: rgb(56,77,38);
    background: ${({active}: {active: boolean}) => active ? 'black' : 'white'};
    color: ${({active}: {active: boolean}) => active ? 'white' : 'rgb(56,77,38)'};
    cursor: pointer;
    transition:  all .3s ease-in-out;
    &:hover {
        background: black;
        color: white;
    }
`

export const SubSetCategory = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export const Filter = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    border: solid 1px rgb(56,77,38);
    padding: 5px 8px;
    border-radius: 10px;
    & > label {
        font-size: 0.8em;
        color: rgb(56,77,38);
    }
    & > select {
        min-width: 100px;
        background: none;
        text-align: center;
        border: none;
        border-radius: 0.1px;
        outline: none;
        color: rgb(56,77,38);
    }
`

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 1px 3px 5px gray;
    justify-content: space-evenly;
    border-radius: 10px;
    align-items: center;
    background: white;
    cursor: pointer;    
`

export const Image = styled.img`
    width: 80%;
    height: 60%;
    object-fit: cover;
`

export const Name = styled.span`
    width: 80%;
    font-size: 0.9em;
`

export const Price = styled.span`
    width: 80%;
    font-size: 0.9em;

`
export const ProductsContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 2.5;
    /* background: rgb(232,241,243); */
    min-height: 100vh;
`
export const Products = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 250px;
    padding: 50px 20px;
    gap: 20px;
    overflow: auto;
    max-height: 80vh;
`

export const CashierContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1.5;
    & > h1 {
        margin: 20px;
        text-align: center;
    }
`

export const Orders = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 50vh;
    overflow-y: auto;
    margin: 20px;
    gap: 10px;
`

export const OrderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    & > td {
        flex: 1;
        /* gap: 10px; */
        & > .image {
            width: 80px;
            height: 80px;
        }


    &.remove {
            /* color: maroon; */
            font-size: 0.7em;
            color: red;
            /* font-weight: ; */
            align-self: flex-start;
        }

    & > button {
        background: #EAEAEA;
        outline: none;
        border: solid 1px gray;
        padding: 5px 10px;
        border-radius: 20px;
        font-size: 1.1em;
        margin: 5px;
    }
    & >.name {
        width: fit-content;
    }
    }
    
`

export const OrderSummary = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 150px;
    width: 90%;
    align-self: center;
`

export const Summary = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Subtotal = styled.span`
    font-size: 1.2em;
`

export const SubtotalAmount = styled.span`
    font-size: 1.2em;
`

export const Tax = styled.span`
    color: gray;
    font-size: 0.9em;
`

export const TaxAmount = styled.span`
    color: gray;
    font-size: 0.9em;
`

export const Discount = styled.span`
    color: gray;
    font-size: 0.9em;
`
export const DiscountAmount = styled.span`
    font-size: 0.9em;
    color: gray;

`

export const Total = styled.span`
    font-size: 1.2em;
`

export const TotalAmount = styled.span`
    font-size: 1.2em;

`