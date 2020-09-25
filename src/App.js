import React from 'react';
import './App.css';
import Main from './Components/Main.js'
import { createMuiTheme , MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#cccccc',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff607a',
      main: '#d7244e',
      dark: '#9f0027',
      contrastText: '#fff',
    },
  },
});


function App() {
  return (
    <MuiThemeProvider className="App" theme={theme}>
      <Main/>
    </MuiThemeProvider>
  );
}

export default App;