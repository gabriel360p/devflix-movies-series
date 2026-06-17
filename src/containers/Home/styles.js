import styled from "styled-components";

export const Background = styled.div`
background-image:url(${props => props.img});
background-size:cover;
background-position: center;
background-repeat: no-repeat;
height:100%;

display: flex;
align-items: center;
justify-content: center;

//criando uma máscara para colocar por cima do background
&::before{
    content:'';
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color:rgba(0,0,0,0.5);
}
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height:100%;
    max-width:1500px ;
    z-index:3;
`;

export const Info = styled.div`
    width: 50%;
  h1{
    font-size:4rem;
    font-weight: 700;
    color:white;
  }
  p{
    font-size: 1.5rem;
    font-weight:500;
    color:white;
    margin-top:30px;
    margin-bottom:20px;
  }
`;

export const ButtonGroup = styled.div`
  display:flex;
  gap: 20px;
  align-items: center;
  margin-top:30px;
`;

export const Poster = styled.div`
    img{
          border-radius:15px;
          height:500px;
        }
`;

export const CarrouselContainer = styled.div`
  margin-block:20px 20px;
`;