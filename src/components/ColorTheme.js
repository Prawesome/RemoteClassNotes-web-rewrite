import { createMuiTheme } from '@material-ui/core/styles';

//custom theme

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#2cd680',
      main: '#3fc380',
      dark: '#298456',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default theme;

//TODO: USE CUSTOM COLORS