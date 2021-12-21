import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@900&family=Roboto:wght@300;400;700&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  html{
    font-size: 62.5%;
  };
  body{
    font-size: 1.6rem;
  }
`;
