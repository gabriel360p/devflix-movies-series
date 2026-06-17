import styled, { css } from 'styled-components';

//criando uma variável que guarda valores css
const buttonStyles = css`
border:3px solid white;
background:transparent;
color:white;
border-radius:30px;
padding:10px 20px;
cursor: pointer;
font-size:1rem;
font-weight:600;

&:hover{
  color:#ff0000;
  background-color:white;
}
`

export const ButtonWhite = styled.button`
  ${buttonStyles}
`;

export const ButtonRed = styled.button`
  ${buttonStyles}
  /*
    Estou carregando o estilo "padrao", porém estou fazendo modificações que vão se sobresair por cima da padrão por ser CASCATE
    ASSIM EU REUZO O MESMO COMPONENTE COM PORÉM COM ESTILOS DIFERENTES!
  */
  background:#ff0000;
  border:4px solid transparent;
  box-shadow:0px 0px 7px 8px rgb(255 0 0 /30%);
  
  &:hover{
    box-shadow:0px 0px 7px 15px rgb(255 0 0 /30%);
    background:#ff0000;
    color:white;
  }
`;