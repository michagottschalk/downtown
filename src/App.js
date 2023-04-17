import React, { useState } from "react";
import { Switch, Grid, Typography, Button, Paper } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      <Paper>
        <Grid container direction="column">
          <Typography variant="h1">downtown</Typography>
          <Button variant="contained" color="primary">
            This is a Button
          </Button>
          <Button variant="contained" color="secondary">
            This is a Button
          </Button>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
