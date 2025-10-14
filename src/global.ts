import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    height: 100dvh;
    font-family: 'PT Sans', sans-serif;
    color: #42567A;
    background: #f9fafb;
  }
`;


//TODO global var for colors