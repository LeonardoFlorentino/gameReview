import { Routes } from '../routes/app.routes';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import './styles.css'

const App = () => {
  return (
    <>
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App