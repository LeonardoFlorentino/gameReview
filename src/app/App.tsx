import { Routes } from '../routes/app.routes';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import{ ThemeProvider as SCThemeProvider } from "styled-components";
import { useTheme, StylesProvider } from "@material-ui/core/styles";
import './styles.css'



const App = () => {
  const muiTheme = useTheme();
  return (
    <>
      <StylesProvider injectFirst>
        <SCThemeProvider theme={muiTheme}>
            <Routes />
            <ToastContainer />
        </SCThemeProvider>
      </StylesProvider>
    </>
  );
}

export default App