import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import { Followers } from '../pages/Followers';
import { Following } from '../pages/Following';
import { Repos } from '../pages/Repos';

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/user/LeonardoFlorentino/" exact>
          <Home />
        </Route>
        <Route path="/user/LeonardoFlorentino/repos">
          <Repos />
        </Route>
        <Route path="/user/LeonardoFlorentino/followers">
          <Followers />
        </Route>
        <Route path="/user/LeonardoFlorentino/following">
          <Following />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
