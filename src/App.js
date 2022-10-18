import './App.css';
import LogInPage from './LogInPage';
import NavBar from './NavBar';
import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import {Button, createTheme, Paper, ThemeProvider, Container, Box} from "@mui/material"
import {grey, green, orange, red} from "@mui/material/colors"
import { typography } from '@mui/system';
import { alpha, styled } from '@mui/material/styles';



const customIntro = styled(typography)({
  display: 'flex',
  fontsize: '50px',
  padding: '30px',
  margin: '30px',

});

function App() {

  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: orange[500]
      },
      customColor: {
        main: red[400],
        superDark: red[800],
        superLight: red[200],
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>     
      <Container>
        <Box bgcolor={grey[300]} width="100%" height="100vh"> 
          <NavBar/>
          <customIntro>Welcome to Team Fitness Tracker!</customIntro>
          <LogInPage/>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
