import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { Followers } from '../pages/Followers';
import { Followings } from '../pages/Followings';
import { Repos } from '../pages/Repos';
import {FollowProfile} from '../pages/FollowProfile'


import { useState } from 'react';

const URL = 'https://api.github.com/users'

export function Router() {

  let [userName, setUserName] = useState<string>('')
  let [user, setUser] = useState<Object>({})
  let [followings, setFollowings] = useState<Array<object>>([])
  let [followers, setFollowers] = useState<Array<object>>([])
  let [repos, setRepos] = useState<Array<object>>([])
  let [follow, setFollow] = useState<Array<object>>([])

  const getUser = async (login: string) => {
    console.log("Passou na Home")
    const emptyUser =  !Object.keys(user).length
    const urlUserMatch = login === userName
    if (!urlUserMatch || emptyUser) {
      try {
        const newURL = `${URL}/${login}`
        const response = await fetch(newURL);
        const newData = await response.json();
        setUser(newData)
        if (!urlUserMatch) {
          setUserName(login)
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

  const getFollowers = async (login: string) => {
    if (login !== userName || followers.length === 0) {
      try {
        const newURL = `${URL}/${login}/followers`
        const response = await fetch(newURL);
        const newData = await response.json();
        setFollowers(newData)
        if (login !== userName) {
          setUserName(login)
          userName = login
          getUser(login)
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


  const getFollowings = async (login: string) => {
    if (login !== userName || followings.length === 0) {
      try {
        const newURL = `${URL}/${login}/following`
        const response = await fetch(newURL);
        const newData = await response.json();
        setFollowings(newData)
        if (login !== userName) {
          setUserName(login)
          userName = login
          getUser(login)
          setFollowers([])
          setUser({})
          setRepos([])
        }
      }
      catch (e) {
        console.log("Requisão com o seguinte erro: ", e)
      }
    }
  }

  const getRepos = async (login: string) => {
    if (login !== userName || repos.length === 0) {
      try {
        const newURL = `${URL}/${login}/repos`
        const response = await fetch(newURL);
        const newData = await response.json();
        setRepos(newData)
        if (login !== userName) {
          setUserName(login)
          userName = login
          getUser(login)
          setFollowers([])
          setFollowings([])
          setUser({})
          
        }
      }
      catch (e) {
        console.log("Requisão com o seguinte erro: ", e)
      }
    }
  }

  const getFollowProfile = async () =>{

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
          <Repos 
            user={user}
            repos={repos}
            getRepos={getRepos}/>
        </Route>
        <Route path="/user/:id/followers">
          <Followers
            user={user}
            followers={followers}
            getFollowers={getFollowers} />
        </Route>
        <Route path="/user/:id/following">
          <Followings
            user={user}
            followings={followings}
            getFollowings={getFollowings} />
        </Route>
        <Route path="/user/:id/:page/:userName">
          <FollowProfile
            user={user}
            follow={follow}
            getFollowProfile={getFollowProfile} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
