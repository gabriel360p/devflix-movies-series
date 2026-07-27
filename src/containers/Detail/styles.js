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
    height:clamp(300px, 50vh, 600px);

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

    @media (max-width: 768px){
        height: 360px;
    }

    @media (max-width: 480px){
        height: 290px;
    }

`;

export const Container = styled.div`  
    display:flex;
    justify-content: center;
    align-items: flex-start;
    width: min(100%, 1500px);
    min-height: 100%;
    margin: -100px auto 0;
    padding-inline: clamp(.5rem, 4vw, 3rem);

    @media (max-width: 768px){
        flex-direction: column;
        align-items: center;
        margin-top: -120px;
        padding-bottom: 1rem;
    }

    @media (max-width: 480px){
        margin-top: -85px;
    }
`;

export const Cover = styled.div`
padding: clamp(.75rem, 2vw, 1.25rem);
animation:${scale} 0.5s linear;
display: flex;
align-items: flex-start;
z-index:2;
height: auto;
  img{
    width: min(32vw, 450px);
    border-radius: 16px;
    box-shadow: rgb(100 100 111/20%)0px 7px 29px 0px;
  }

  @media (max-width: 768px){
    width: min(65vw, 330px);

    img{
      width: 100%;
    }
  }

  @media (max-width: 480px){
    width: min(76vw, 290px);
  }
`;

export const Info = styled.div`
    display: flex;
    flex-direction:column;
    align-items: flex-start;
    padding:clamp(.75rem, 2vw, 1.25rem);
    z-index:2;
    width: min(100%, 720px);
    color:white;
    h2{
        font-size:clamp(1.75rem, 4vw, 2.5rem);
        font-weight:700;
        color:white;
    }
    p{
        font-weight:700;
        color:white;
        margin-top:20px;
        margin-bottom:20px;
        line-height: 1.55;
    }

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
        text-align: center;
    }
`;

export const ContainerMovies = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding:clamp(1rem, 3vw, 2rem);
    width: 100%;
    h4{
        text-align:center;
        padding: 20px;
        font-size: 1.1rem;
        font-weight:700;
        color:white;
    }
    iframe{
        aspect-ratio: 16 / 9;
        height:auto;
        width:min(90vw, 850px);
        border:none;
    }
`;
