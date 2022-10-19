import styled from "styled-components";
import { useLocation } from "react-router-dom";
import {excluded} from "./excluded"

export const PublicRoutesContainer = styled.section`
    height: 80px;
    width: 100%;
    padding-top: ${() => {
        const {pathname} = useLocation()
        const givePadding = !excluded.some(path => pathname.includes(path));
        return givePadding ? "80px" : "0px"
    }};
`