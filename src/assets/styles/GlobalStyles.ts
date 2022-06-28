import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  
  div#_next {
    overflow-x: hidden;
    z-index: 0;
    position: relative;
  }
  
  body {
    font-family: 'Manrope', sans-serif;
    background-color: ${({ theme }) => theme.colors.gray};
    width: 100vw;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  
  a, input, button, textarea, select {
    font-family: 'Manrope', sans-serif;
  }
  
  select {
    cursor: pointer;
  }
`;
