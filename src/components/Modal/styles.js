import styled from "styled-components";

export const Background = styled.div`
    z-index:999;
    height:100vh;
    width:100vw;
    background-color:black;
    background-color:rgba(0,0,0,0.6);
    position:absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

export const Container = styled.div`
    background:black;      
    width:50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position:fixed;
    padding: 50px;
    max-width:1200px;

    iframe{
        border:none;
    }
`;