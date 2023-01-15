import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#532267",
      light: "#9c27b0",
      dark: "#411952",
    },
    white: {
      main: "#fff",
      darker: "#eee",
      contrastText: "#fff",
    },
    gray: {
      main: "#eee",
      dark: "#202124",
    },
  },
  typography: {
    fontFamily: ["Poppins", "Cursive"].join(","),
  },
});

export default theme;
