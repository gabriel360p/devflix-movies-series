import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavBar = styled.nav`
    z-index:99;
    position:fixed;
    top:0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding:1rem clamp(1rem, 4vw, 3rem);

    min-height: ${props => props.$scrollPosition ? '72px' : '96px'};
    transition: min-height 0.3s ease-in-out, background-color 0.3s ease-in-out;

    background-color:${props => props.$scrollPosition ? 'black' : 'transparent'};
    ol{
        display: flex;
        gap:clamp(1rem, 4vw, 3rem);
        list-style:none;
    }

    @media (max-width: 560px){
        min-height: 72px;
        padding-block: .75rem;
    }
    `
export const Logo = styled.img`
    height:clamp(2.25rem, 7vw, 3rem);
`
export const RouterLink = styled(NavLink)`
    text-decoration: none;
    position:relative;
    cursor: pointer;
    color:white;
    font-weight:600;
    font-size:clamp(.95rem, 3.8vw, 1.3rem);

    &::after{
        content:'';
        height:3px;
        width: ${props => !props.$isActive ? '0' : '100%'};
        background-color: #189b20;
        position:absolute;
        bottom:-10px;
        left:50%;
        transform:translateX(-50%);
        transition:width 0.5s ease-in-out;
    }

    &:hover::after{
        width: 100%;
        /* Quando o mouse passar por cima, vai fazer uma alteração em meu after ja declarado anteriomente */
    }

    @media (max-width: 360px){
        font-size: .85rem;
    }

    `
