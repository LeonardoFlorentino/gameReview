import { useState, useCallback } from 'react';
import { Router } from '../routes/app.routes';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import './styles.css'


const App = () => {
  const [userName, setUserName] = useState('')
  const [user, setUser] = useState({})

  const fetchUserData = useCallback(
    async (nameLogin: string, setToMainUser: boolean) => {
      if (setToMainUser || Object.entries(user).length === 0) {
        setUserName(nameLogin)
      }

      try {
        const response = await fetch(`https://api.github.com/users/${nameLogin}`)
        if (response.ok) {
          const reponseJson = await response.json()
          setUser(reponseJson)
          return response.status
        }
        else {
          return response.status
        }
      }
      catch (error) {
        return 0
      }
      
    }
    , [user])


  return (
    <>
      <Router
        userName={userName}
        setUserName={setUserName}
        user={user}
        setUser={setUser}
        fetchUserData={fetchUserData}
      />
      <ToastContainer />
    </>
  );
}

export default App