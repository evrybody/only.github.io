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
    color: var(--dark-blue);
    background: #F4F5F9;
  }

  :root {
  --dark-blue: #42567a;
  --blue: #3877ee;
  --black-blue: #303e58;
  }
}
`;
