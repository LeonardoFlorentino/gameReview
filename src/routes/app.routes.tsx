import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Profile } from '../pages/Home';
import { Followers } from '../pages/Followers';
import { Followings } from '../pages/Followings';
import { Repos } from '../pages/Repos';
import { AnotherUser } from '../pages/AnotherUser'

import {  routerProps } from '../interface'

export const Router = (props: routerProps) => {
  return (
    < BrowserRouter >
    <Switch>
      <Route path="/" exact>
        <Login
          setUser={props.setUser}
          userName={props.userName}
          setUserName={props.setUserName}
        />
      </Route>
      <Route path="/:mainUserName"  exact>
        <Profile
          userName={props.userName}
          setUserName={props.setUserName}
          user={props.user}
          setUser={props.setUser}
          fetchUserData={props.fetchUserData}
        />
      </Route>
      <Route path="/:mainUserName/repos" exact>
        <Repos
          user={props.user}
          fetchUserData={props.fetchUserData}
          userName={props.userName}
        />
      </Route>
      <Route path="/:mainUserName/followers" exact>
        <Followers
          user={props.user}
          fetchUserData={props.fetchUserData}
          userName={props.userName}
        />
      </Route>
      <Route path="/:mainUserName/followings" exact>
        <Followings
          user={props.user}
          fetchUserData={props.fetchUserData}
          userName={props.userName}
        />
      </Route>
      <Route path="/:mainUserName/:pageType/:subordinateUserName" exact>
        <AnotherUser
          userName={props.userName}
          setUserName={props.setUserName}
          user={props.user}
          setUser={props.setUser}
          fetchUserData={props.fetchUserData}
        />
      </Route>
    </Switch>
    </BrowserRouter >
  );
}
