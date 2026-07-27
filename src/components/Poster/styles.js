import styled from "styled-components";

export const CarrouselPoster = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    word-wrap: break-word;
    gap: 10px;
    text-decoration: none;
    transition: transform .2s ease;

    &:hover{
        transform: translateY(-4px);
    }
    `

export const CarrouselImagePoster = styled.img`
    width: 100%;
    aspect-ratio: 2 / 3;
    object-fit: cover;
    height:auto;
    border-radius:10px;
`;
export const PosterTitle = styled.h3`
    color:white;
    font-size:1rem;
    font-weight: 200;
    text-align: center;
    width: 100%;
    min-height: 2.5em;
`;
