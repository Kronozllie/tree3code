import React, { createContext, useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState('light'); // puede iniciar en 'light' o 'dark'

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode,
        ...(mode === 'light'
          ? {
              background: {
                default: '#f5f5f5',
                paper: '#ffffff',
              },
              text: {
                primary: '#111111',
              },
              sectionBackgrounds: {
                primary: '#f9f9f9',
                secondary: '#eaeaea',
              },
            }
          : {
              background: {
                default: '#1c1c1e',
                paper: '#1e1e1e',
              },
              text: {
                primary: '#ffffff',
              },
              sectionBackgrounds: {
                primary: '#2a2a2a',
                secondary: '#1e1e1e',
              },
            }),
      },
      typography: {
        fontFamily: 'Montserrat, sans-serif',
      },
    }), [mode]
  );
  

  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
