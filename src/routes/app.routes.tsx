import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Profile } from '../pages/Home';
import { Followers } from '../pages/Followers';
import { Followings } from '../pages/Followings';
import { Repos } from '../pages/Repos';
import { AnotherUser } from '../pages/AnotherUser'
import { createBrowserHistory } from 'history';



export const Routes = () => {
  return (
    <BrowserRouter >
    <Switch>
      <Route path="/" exact >
        <Login/>
      </Route>
      <Route path="/home"  exact>
        <Profile/>
      </Route>
      <Route path="/repos" exact>
        <Repos/>
      </Route>
      <Route path="/followers" exact>
        <Followers/>
      </Route>
      <Route path="/following" exact>
        <Followings/>
      </Route>
      <Route path="/anotherUser" exact>
        <AnotherUser/>
      </Route>
    </Switch>
    </BrowserRouter >
  );
}
