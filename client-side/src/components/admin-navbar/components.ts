import styled from "styled-components";

export const AdminNavbarContainer = styled.nav`
    display: flex;
    background: white;
    height: 80px;
    align-items: center;
    border-radius: 20px;
    box-shadow: 1px 3px 5px gray;
`

export const AdminLinks = styled.div`
flex: 1;
& > a {
    padding: 10px 15px;
    margin: 5px;
    font-size:0.8em;
}
`

export const UserProfile = styled.div`
height: 50px;
display: flex;
& > img {
    width: 50px;
}
`