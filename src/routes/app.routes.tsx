import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Profile } from '../pages/Home';
import { Followers } from '../pages/Followers';
import { Followings } from '../pages/Followings';
import { Repos } from '../pages/Repos';
import { AnotherUser } from '../pages/AnotherUser'

import { dataTypes } from '../interface'
interface routerProps {
  userName: string,
  setUserName: (value:  string | ((prevState:  string) =>  string)) => void,
  user: dataTypes,
  setUser: (value: dataTypes | ((prevState:  dataTypes) =>  dataTypes)) => void,
  fetchData: (value1: string, value2: string) => void,
  subordinateUser: Object
}

export const Router = (props: routerProps) => {
  return (
    < BrowserRouter >
    <Switch>
      <Route path="/" exact>
        <Login
          userName={props.userName}
          setUserName={props.setUserName}
        />
      </Route>
      <Route path="/:mainUserName" exact>
        <Profile
          userName={props.userName}
          setUserName={props.setUserName}
          user={props.user}
          setUser={props.setUser}
          fetchData={props.fetchData}
        />
      </Route>
      <Route path="/:mainUserName/repos" exact>
        <Repos
          user={props.user}
          fetchData={props.fetchData}
          userName={props.userName}
        />
      </Route>
      <Route path="/:mainUserName/followers" exact>
        <Followers
          user={props.user}
          fetchData={props.fetchData}
          userName={props.userName}
        />
      </Route>
      <Route path="/:mainUserName/followings" exact>
        <Followings
          user={props.user}
          fetchData={props.fetchData}
          userName={props.userName}
        />
      </Route>
      <Route path="/:mainUserName/:pageType/:subordinateUserName" exact>
        <AnotherUser
          userName={props.userName}
          setUserName={props.setUserName}
          user={props.subordinateUser}
          setUser={props.setUser}
          fetchData={props.fetchData}
        />
      </Route>
    </Switch>
    </BrowserRouter >
  );
}
