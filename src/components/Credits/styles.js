import styled from "styled-components";


export const Title = styled.h4`
    color:white;
    font-size:1.8rem;
    font-weight:700;
`;

export const Container = styled.div`
    display: flex;
    margin-top:30px;
    gap:10px;
    flex-wrap: wrap;
    div{
        display: flex;
        flex-direction: column;
        text-align:center;
    }
    p{
        color:white;
    }
    img{
        width: clamp(90px, 18vw, 150px);
        aspect-ratio: 2 / 3;
        height:auto;
        object-fit: cover;
    }

    @media (max-width: 768px){
        justify-content: center;
    }
`
