import styled from "styled-components";

export const Background = styled.div`
    z-index:999;
    min-height:100vh;
    width:100%;
    background-color:black;
    background-color:rgba(0,0,0,0.6);
    position:fixed;
    inset:0;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

export const Container = styled.div`
    background:black;      
    width:min(90vw, 1000px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: clamp(1rem, 4vw, 3rem);
    max-width:1200px;

    iframe{
        border:none;
        aspect-ratio: 16 / 9;
        height: auto;
    }
`;
