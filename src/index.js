import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global.styles';
import { theme } from './styles/theme';
import AppRoutes from './Routes/AppRoutes';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
