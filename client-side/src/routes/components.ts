import styled from "styled-components";
import { useLocation } from "react-router-dom";
export const PublicRoutesContainer = styled.section`
    height: 80px;
    width: 100%;
    padding-top: ${() => {
        const {pathname} = useLocation()
        console.log(pathname)
        const excludedRoutes = ['login']
        const givePadding = !excludedRoutes.some(path => pathname.includes(path));
        return givePadding ? "80px" : "0px"
    }};
`