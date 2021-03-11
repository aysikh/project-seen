import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.css';
import App from './App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
  typography: {
    h4: {
      color: '#4ba3c7',
      textAlign: "center",
      fontFamily: "Josefin Sans"
    },
  },
  palette: {
    primary: {
      main: '#2a7f48',
    },
    secondary: {
      main: '#b2dfdb',
    },
  }
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

