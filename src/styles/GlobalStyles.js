import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    #root{
        min-height: 100vh;
}
body{
    background-color:black;
    font-family: Arial, Helvetica, sans-serif;
    overflow-x: hidden;
}

img, iframe{
    max-width: 100%;
}
`
