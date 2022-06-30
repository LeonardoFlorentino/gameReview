import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login } from '../pages/Login'
import { Home } from '../pages/Home';
import { Rating } from '../pages/Rating';
import { LastLocationProvider } from 'react-router-last-location';


export const Routes = () => {
  return (
    <BrowserRouter >
      <LastLocationProvider>
        <Switch>
          <Route path="/" exact >
            <Login />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/rating" exact>
            <Rating />
          </Route>
        </Switch>
      </LastLocationProvider>
    </BrowserRouter >
  );
}
