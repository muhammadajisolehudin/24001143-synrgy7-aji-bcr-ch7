import { createTheme, Theme } from '@mui/material/styles';

export const createCustomTheme = (): Theme => {
  return createTheme({
    palette: {
      primary: {
        main: '#0D28A6',
      },
       secondary: {
        main: '#CFD4ED',
      },
      error:{
        main:'#FA2C5A'
      },
      success:{
        main:'#5CB85F'
      }
    },
    
  });
};
