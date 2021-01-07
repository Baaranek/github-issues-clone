import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

  }

  body {
    margin: 0;
    padding: 0;
    background-color: #0d1117;
    color: #c9d1d9;
  }
  html {
    font-size: 16px;
    overflow: hidden;
    overflow-y: auto;
  }

  a{
    text-decoration: none;
    color: inherit;

    :hover {
      color: #58a6ff;
    }
  }
`;

export default GlobalStyle;
