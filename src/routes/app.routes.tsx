import { BrowserRouter, Switch, Route  } from 'react-router-dom';

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
        <Route path="/user/:id" exact>
          <Home />
        </Route>
        <Route path="/user/:id/repos">
          <Repos />
        </Route>
        <Route path="/user/:id/followers">
          <Followers />
        </Route>
        <Route path="/user/:id/following">
          <Following />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
