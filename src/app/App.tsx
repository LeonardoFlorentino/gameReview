

import { useState } from 'react';
import { Router } from '../routes/app.routes';

const App = () => {
  const [userName, setUserName] = useState('')
  const [user, setUser] = useState({})
  const [subordinateUser, setSubordinateUser] = useState({})

  const fetchData = (nameLogin: any, profile: string) => {
    if (profile === 'mainUser' && (userName !== nameLogin || Object.entries(user).length === 0)) {
      setUserName(nameLogin)
      fetch(`https://api.github.com/users/${nameLogin}`)
        .then((res) => res.json())
        .then((value) => setUser(value))
    }
    else if(profile === 'subordinateUser'){
      fetch(`https://api.github.com/users/${nameLogin}`)
        .then((res) => res.json())
        .then((value) => setSubordinateUser(value))
    }
  }

  return (
    <Router
      userName={userName}
      setUserName={setUserName}
      user={user}
      setUser={setUser}
      fetchData={fetchData}
      subordinateUser={subordinateUser}
    />
  );
}

export default App