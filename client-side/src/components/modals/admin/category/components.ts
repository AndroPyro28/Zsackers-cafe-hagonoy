import styled from "styled-components";
import {motion} from "framer-motion"
import { Form } from "formik";

export const CategoryModalBackdrop = styled.div`
    position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.548);
`

export const CategoryModalContainer = styled(motion.div)`
    width: 95vw;
    height: 95vh;
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow-x: hidden;
    overflow-y: hidden;
    padding: 30px;
`

export const TitleAndContent = styled.div`
    & > h1 {
        margin:10px 0px;
        font-size: 1.8em;
    }
    & > p {
        font-size: 0.9em;
        text-align: justify;
        color: gray;
    }
`
export const CategoryContent = styled.section`
    display: flex;
` 

export const LeftCategoryContentContainer = styled.div`
    flex: 2;
    overflow: auto;
    overflow-x: hidden;
`

export const SearchBarContainer = styled.div`
    display: flex;
    margin: 20px 60px;
`

export const SearchBar = styled.div`
    border: solid 1px gray;
    padding: 10px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    gap: 5px;
    display: flex;
    margin: 20px ;

    & > input {
        width: 100%;
        border: none;
        outline: none;
    }
`


export const CategoryListContainer = styled.div`
    display: flex;
    flex-direction:column;
    width: 100%;
`

export const CategoryListHeader = styled.thead`
display: flex;
padding: 10px;
& > th {
    flex: 1;
}
`
export const CategoryListBody = styled.tbody`
display: flex;
flex-direction:column;
padding: 10px;
overflow-x: hidden;
overflow-y: auto;
max-height: 50vh;


`
export const CategoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 20px 5px;
   
`
export const CategoryContainer = styled.div`
    display: flex;
    & > td {
        flex: 1;
        text-align: center;

        & > span {
            margin: 10px;
            font-size: 1.3em;

            &.subcategories__button {
                cursor: pointer;
            }
        }
    }
`

export const SubCategoryListContainer = styled.div`
    display: flex;
    flex-direction:column;
    padding: 10px;

`

export const SubCategoryContainer = styled.div`
display: flex;
width: 100%;
margin: 10px 60px;

& > td {
    flex: 1;
    font-size: 0.9em;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-inline:10px ;
    & > span {
        margin: 10px;
        font-size: 1.3em;
    }
}
`

export const CreateSubCategoryContainer = styled.div`
    margin: 10px 60px;
    display: flex;
    align-items: center;
    & > input {
        outline: none;
        height: fit-content;
        padding: 5px 10px;
        border-radius: 5px;
        border:solid 1px gray;
        width:400px;
    }
    & > button {
        padding: 5px 20px;
        background: white;
        border: solid 1px gray;
        margin: 10px;
        border-radius: 10px;
    }
`

export const LeftForm = styled(Form)`

`

export const CategoryInputField = styled.div`
display: flex;
gap:20px;

& > .input-field {
    display: flex;
    flex-direction:column;
    /* justify-content: center; */

    &.right {
        & > input {
            width: 250px;
        }
    }
    &.left {
        & > input {
            width: 210px;
        }
    }
    & > input {
        padding: 5px 10px;
        width: 100%;
        border-radius: 10px;
        border: solid 1px gray;
        outline: none;
    }

     & > .error__message {
        color: maroon;
        font-size: 0.9em;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
     }
}

& > button {
    height: fit-content;
    background: rgb(51,102,51);
    color: white;
    border:none;
    padding: 5px 10px;
    border-radius: 10px;
    cursor: pointer;
}
`

export const CategoryListFooter = styled.tfoot`
display: flex;
`

export const RightCategoryContentContainer = styled.div`
    flex: 1;
`

export const RightForm = styled(Form)`
display: flex;
flex-direction: column;
/* align-items: center; */

 & > h1 {
    align-self: flex-start;
    margin: 20px 10px;
    font-size: 1.3em;
 };
`
