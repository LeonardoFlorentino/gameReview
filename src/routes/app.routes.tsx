import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { Followers } from '../pages/Followers';
import { Following } from '../pages/Following';
import { Repos } from '../pages/Repos';


// import { useParams } from 'react-router';
import { useState } from 'react';

// import {data} from '../data/index'
// import { RouteParams,dataTypes  } from '../interface';

const URL = 'https://api.github.com/users'

export function Router() {

  let [userName, setUserName] = useState<string>('')
  let [user, setUser] = useState<Object>({})
  let [followings, setFollowings] = useState<Array<object>>([])
  let [followers, setFollowers] = useState<Array<object>>([])
  let [repos, setRepos] = useState<Array<object>>([])

  const getUser = async (id: string) => {
    if (id !== userName || Object.entries(user).length === 0) {
      try {
        const newURL = `${URL}/${id}`
        const response = await fetch(newURL);
        const newData = await response.json();
        setUser(newData)
        if (id !== userName) {
          setFollowers([])
          setFollowings([])
          setRepos([])
        }
      }
      catch (e) {
        console.log("Requisão com o seguinte erro: ", e)
      }
    }
  }

  const getFollowers = async (id: string) => {
    if (id !== userName || followers.length === 0) {
      try {
        const newURL = `${URL}/${id}/followers`
        const response = await fetch(newURL);
        const newData = await response.json();
        setFollowers(newData)
        if (id !== userName) {
          setUserName(id)
          userName = id
          getUser(id)
          setFollowings([])
          setUser({})
          setRepos([])
        }
      }
      catch (e) {
        console.log("Requisão com o seguinte erro: ", e)
      }
    }
  }


  const getFollowings = async (id: string) => {
    if (id !== userName) {
      try {
        const newURL = `${URL}/${id}/followers`
        const response = await fetch(newURL);
        const newData = await response.json();
        setFollowings(newData)
        setFollowers([])
        setRepos([])
        setUserName(id)
      }
      catch (e) {
        console.log("Requisão com o seguinte erro: ", e)
      }
    }
  }


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login userName={userName} setUserName={setUserName} getUser={getUser} />
        </Route>
        <Route path="/user/:id" exact>
          <Home
            user={user}
            getUser={getUser}
          />
        </Route>
        <Route path="/user/:id/repos">
          <Repos />
        </Route>
        <Route path="/user/:id/followers">
          <Followers
            user={user}
            followers={followers}
            getFollowers={getFollowers} />
        </Route>
        <Route path="/user/:id/following">
          <Following
            user={user}
            followings={followings}
            getFollowings={getFollowings} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
