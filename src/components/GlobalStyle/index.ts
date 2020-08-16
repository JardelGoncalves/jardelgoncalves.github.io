import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  * {
    margin: 0;
    outline: 0;
    padding: 0;
    box-sizing: border-box;
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
  body,
  input,
  button {
    font-family: 'Inter', sans-serif;
  }
`;
