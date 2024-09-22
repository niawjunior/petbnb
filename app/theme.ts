"use client"

import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#FC7EF7",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#F7F7F7",
      contrastText: "#000000",
    },
  },
  typography: {
    fontFamily: "var(--font-prompt)",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Example: Custom border radius for buttons
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#F7F7F7",
        },
      },
    },
  },
})

export default theme
