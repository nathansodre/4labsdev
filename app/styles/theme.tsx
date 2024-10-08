// app/styles/theme.ts
import { createTheme } from "@mui/material/styles";

// Defina o seu tema personalizado
const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Substitua pela fonte que preferir
  },
  palette: {
    background: {
      default: "#e3d3d3", // Cor de fundo global
    },
  },
});

export default theme;
