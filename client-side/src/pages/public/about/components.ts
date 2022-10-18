import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const DonutsBg = styled.div`
    height: 350px;
    width: 100%;
    background: url('/assets/donutsbg2.jpg');
    background-size:cover;
    background-repeat: no-repeat;
    background-position: center;
`

export const AboutContent = styled.div`
    width: 90%;
    /* height: 500px; */
    box-shadow: 1px 3px 5px gray;
    margin-top: -80px;
    background:white ;
    position: relative;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-inline:50px;
    gap: 50px;
    & > h1 {
        text-align: center;
        margin-top: -190px;
        font-size: 3em;
        color: white;
        text-shadow: 1px 3px 5px black;
    }

     & > img {
        width: 200px;
        border-radius: 50%;
     }

     & > p {
        text-align: justify;
        font-size: 0.9em;
     }
`