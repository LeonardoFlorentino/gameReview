import { BrowserRouter, Switch, Route  } from 'react-router-dom';

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

  const [userName,setUserName] = useState<string>('')
  const [user,setUser] = useState<object>({})

  const fetchData = async () =>{
    if(userName === ''){
      return null
    }
    else{
      const newURL = `${URL}/${userName}`
      const response = await fetch(newURL);
      const newData = await response.json();
      setUser(newData) 
    }
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Login userName = {userName} updateUserName={setUserName} fetchData={fetchData}/>
        </Route>
        <Route path="/user/:id" exact>
          <Home user={user} 
          fetchData={fetchData} 
          userName={userName} 
          setUserName={setUserName}/>
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
