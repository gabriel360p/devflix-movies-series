import styled from "styled-components";

export const Background = styled.div`
background-image:url(${props => props.img});
background-size:cover;
background-position: center;
background-repeat: no-repeat;
min-height:100vh;
padding: 110px clamp(1rem, 5vw, 4rem) 3rem;

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
    min-height: 100%;
    background-color:rgba(0,0,0,0.5);
}

@media (max-width: 768px){
  padding-top: 90px;
}

@media (max-width: 420px){
  padding-inline: 1rem;
}
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width:100%;
    min-height: calc(100vh - 140px);
    max-width:1500px;
    gap: clamp(2rem, 6vw, 6rem);
    z-index:3;

    @media (max-width: 768px){
      min-height: auto;
      flex-direction: column-reverse;
      justify-content: center;
      text-align: center;
    }
`;

export const Info = styled.div`
    width: min(100%, 720px);
  h1{
    font-size:clamp(2.25rem, 6vw, 4rem);
    font-weight: 700;
    color:white;
  }
  p{
    font-size: clamp(1rem, 2.2vw, 1.5rem);
    line-height: 1.5;
    font-weight:500;
    color:white;
    margin-top:30px;
    margin-bottom:20px;
  }

  @media (max-width: 768px){
    width: 100%;
  }
`;

export const ButtonGroup = styled.div`
  display:flex;
  gap: 1rem;
  align-items: center;
  margin-top:30px;

  @media (max-width: 768px){
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: 420px){
    flex-direction: column;

    button{
      width: min(100%, 280px);
    }
  }
`;

export const Poster = styled.div`
    img{
          border-radius:15px;
          width: min(32vw, 360px);
          max-height: 500px;
          object-fit: cover;
          box-shadow: 0 8px 30px rgba(0,0,0,.35);
        }

    @media (max-width: 768px){
      img{
        width: min(55vw, 280px);
        max-height: 380px;
      }
    }
`;

export const CarrouselContainer = styled.div`
  margin-block:20px 20px;
  padding-inline: clamp(.25rem, 2vw, 1.5rem);
`;
