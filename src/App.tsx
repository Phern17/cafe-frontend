import React from "react";
import "./App.css";
import {
  ThemeProvider,
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container, 
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Box from "@mui/material/Box";
import { themeOptions } from "./theme";

const theme = createTheme(themeOptions);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box sx={{ bgcolor: "background.paper", pt: 8, pb: 6 }}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >a bunch of nonsense.`</Typography>

            <Box textAlign="center">
              <Button variant="contained">Order now</Button>
            </Box>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}

export default App;
