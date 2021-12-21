import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
// import App from './App';
import { GlobalStyles } from './styles/global.styles';
import { theme } from './styles/theme';
import Home from './pages/Home/Home';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
