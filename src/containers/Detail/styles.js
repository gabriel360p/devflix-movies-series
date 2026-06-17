import styled from "styled-components";
import { keyframes } from "styled-components";

const scale = keyframes`
    from{
        transform:scale(0);
    }
    to{
        transform:scale(1);
    }
`

export const Background = styled.div`  
    background-image: url(${props => props.$image});
    background-position:center;
    background-size:cover;
    background-repeat: no-repeat;
    position:relative;
    height:50vh;

    &::before{
        content:'';
        position:absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        background-color:rgba(0,0,0,0.5);
    }
    &::after{
        content:'';
        position:absolute;
        bottom:0;
        left:0;
        width: 100%;
        height: 150px;
        background-image:linear-gradient(to top, #0f0f0f,rgba(0,0,0,0));

    }

`;

export const Container = styled.div`  
    display:flex;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    max-width:1500px;
    margin-top:-100px;
`;

export const Cover = styled.div`
padding: 20px;
animation:${scale} 0.5s linear;
display: flex;
align-items: flex-start;
z-index:2;
height: 100%;
  img{
    width:450px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111/20%)0px 7px 29px 0px;
  }
`;

export const Info = styled.div`
    display: flex;
    flex-direction:column;
    align-items: flex-start;
    padding:20px;
    z-index:2;
    width: 50%;
    color:white;
    h2{
        font-size:2rem;
        font-weight:700;
        color:white;
    }
    p{
        font-weight:700;
        color:white;
        margin-top:20px;
        margin-bottom:20px;
    }
`;

export const ContainerMovies = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding:20px;
    width: 100%;
    h4{
        text-align:center;
        padding: 20px;
        font-size: 1.1rem;
        font-weight:700;
        color:white;
    }
    iframe{
        height:400px;
        width: 50vw;
        border:none;
    }
`;
