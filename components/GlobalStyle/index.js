import { createGlobalStyle } from "styled-components";
{/* <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet"></link> */}
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body,
  span,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button,
  a,
  input,
  select {
    font-family: 'Raleway', sans-serif;
  }

  body {
    background-color: var(--bg-color);
    transition: background 0.4s;
  }
`;
