import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login } from '../pages/Login';
import {Profile} from '../pages/Home';
import { Followers } from '../pages/Followers';
import { Followings } from '../pages/Followings';
import { Repos } from '../pages/Repos';
import {AnotherUser} from '../pages/AnotherUser'


export const Router = (props:any) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login
            userName={props.userName}
            setUserName={props.setUserName}
          />
        </Route>
        <Route path="/user/:mainUserName" exact>
          <Profile
            userName={props.userName}
            setUserName={props.setUserName}
            user={props.user}
            setUser={props.setUser}
            fetchData={props.fetchData}
          />
        </Route>
        <Route path="/user/:mainUserName/repos" exact>
          <Repos
            user={props.user}
            fetchData={props.fetchData}
            userName={props.userName}
          />
        </Route>
        <Route path="/user/:mainUserName/followers" exact>
          <Followers
            user={props.user}
            fetchData={props.fetchData}
            userName={props.userName}
          />
        </Route>
        <Route path="/user/:mainUserName/followings" exact>
          <Followings
            user={props.user}
            fetchData={props.fetchData}
            userName={props.userName}
          />
        </Route>
        <Route path="/user/:mainUserName/:pageType/:subordinateUserName" exact>
          <AnotherUser
            userName={props.userName}
            setUserName={props.setUserName}
            user={props.subordinateUser}
            setUser={props.setUser}
            fetchData={props.fetchData}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
