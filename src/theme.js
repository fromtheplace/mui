import { createTheme, ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#2bb573',
      light: '#32c17f',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f56000',
    },
    error: {
      main: '#ff0004',
    },
    warning: {
      main: '#a4a4a4',
    },
    success: {
      main: '#00ff38',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Oswald',
    },
    fontFamily: 'Oswald',
    body1: {
      fontFamily: 'Slabo 27px',
    },
    body2: {
      fontFamily: 'Slabo 27px',
    },
    caption: {
      fontFamily: 'Droid Serif',
    },
  },
  shape: {
    borderRadius: 10,
  },
  spacing: 20,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white',
          height: 48,
          padding: '0 30px',
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);
export default theme;
