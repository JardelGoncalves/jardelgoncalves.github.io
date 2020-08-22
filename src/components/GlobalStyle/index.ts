import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    outline: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
  p,
  label,
  body,
  input,
  button {
    font-family: 'Inter', sans-serif;
  }

  body {
    background-color: ${({ theme }: any) => theme.colors.bg};
  }
`;
