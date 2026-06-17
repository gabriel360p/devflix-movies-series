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
    padding:1rem 2rem;

    min-height: ${props => props.$scrollPosition ? '0' : '120px'};
    transition: min-height 1s ease-in-out;

    background-color:${props => props.$scrollPosition ? 'black' : 'transparent'};
    transition: background-color 0.5s ease-in-out;

    ol{
        display: flex;
        gap:50px;
        list-style:none;
    }
    `
export const Logo = styled.img`
    height:3rem;
`
export const RouterLink = styled(NavLink)`
    text-decoration: none;
    position:relative;
    cursor: pointer;
    color:white;
    font-weight:600;
    font-size:1.3rem;

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

    `