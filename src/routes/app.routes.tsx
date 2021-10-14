import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Profile } from '../pages/Profile';
import { Followers } from '../pages/Followers';
import { Following } from '../pages/Following';
import { Repos } from '../pages/Repos';
import { Navbar } from '../components/Navbar'

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/user/LeonardoFlorentino">
          <Profile />
          <Navbar />
        </Route>
        <Route path="/following">
          <Following />
          <Navbar />
        </Route>
        <Route path="/followers">
          <Followers />
          <Navbar />
        </Route>
        <Route path="/repos">
          <Repos />
          <Navbar />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
