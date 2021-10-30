import { useState } from 'react';
import { Router } from '../routes/app.routes';


const App = () => {
  const [userName, setUserName] = useState('')
  const [user, setUser] = useState({})

  const fetchUserData = (nameLogin: string, setToMainUser: boolean) => {
    if (setToMainUser || Object.entries(user).length === 0) {
      setUserName(nameLogin)
    }

    fetch(`https://api.github.com/users/${nameLogin}`)
      .then((res) => res.json())
      .then((value) => setUser(value))
  }

  return (
    <Router
      userName={userName}
      setUserName={setUserName}
      user={user}
      setUser={setUser}
      fetchUserData={fetchUserData}
    />
  );
}

export default App