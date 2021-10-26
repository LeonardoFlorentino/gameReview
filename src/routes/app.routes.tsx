import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Profile } from '../pages/Home';
import { Followers } from '../pages/Followers';
import { Followings } from '../pages/Followings';
import { Repos } from '../pages/Repos';


import { useState } from 'react';

const URL = 'https://api.github.com/users'

export function Router() {

  let [userName, setUserName] = useState<string>('')
  let [user, setUser] = useState<Object>({})
  let [userFollowName, setUserFollowName] = useState<string>('')
  let [userFollow, setUserFollow] = useState<Object>({})

  const getUser = async (login: string) => {
    const emptyUser = !Object.keys(user).length
    const urlUserMatch = login === userName
    if (!urlUserMatch || emptyUser) {
      try {
        const newURL = `${URL}/${login}`
        const response = await fetch(newURL);
        const newData = await response.json();
        setUser(newData)
        if (!urlUserMatch) {
          setUserName(login)
          cleanOthersStates('home')
        }
      }
      catch (e) {
        console.log("Requisão com o seguinte erro: ", e)
      }
    }
  }


  const getUserFollow = async (login: string) => {
    const emptyUser = !Object.keys(userFollow).length
    const urlUserMatch = login === userFollowName
    if (!urlUserMatch || emptyUser) {
      try {
        const newURL = `${URL}/${login}`
        const response = await fetch(newURL);
        const newData = await response.json();
        setUserFollow(newData)
        if (!urlUserMatch) {
          setUserFollowName(login)
        }
      }
      catch (e) {
        console.log("Requisão com o seguinte erro: ", e)
      }
    }
  }

  const cleanOthersStates = async (state: string) => {
    if (state !== 'home') setUser({})
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login userName={userName}
            setUserName={setUserName}
            getUser={getUser}
            clean={cleanOthersStates} />
        </Route>
        <Route path="/user/:id" exact>
          <Profile
            profile={'mainUser'}
            setUserName={setUserName}
            clean={cleanOthersStates}
            user={user}
            getUser={getUser}
          />
        </Route>
        <Route path="/user/:id/repos" exact>
          <Repos
            user={user}
          />
        </Route>
        <Route path="/user/:id/followers" exact>
          <Followers
            user={user}
          />
        </Route>
        <Route path="/user/:id/followings" exact>
          <Followings
            user={user}
          />
        </Route>
        <Route path="/user/:id/:page/:name" exact>
          <Profile
            profile={'followUser'}
            setUserName={setUserFollowName}
            user={userFollow}
            getUser={getUserFollow}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
