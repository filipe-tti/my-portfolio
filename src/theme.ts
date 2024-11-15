import { responsiveFontSizes } from "@mui/material";
import createTheme from "@mui/material/styles/createTheme";



let theme = createTheme({
    palette: {
      primary: {
        main: '#232323',
      },
      secondary: {
        main: '#4f8e3e',
      },
    },

    typography: {
        fontFamily: "Segoe UI"
    }
  });

  theme = responsiveFontSizes(theme);


  export default theme;