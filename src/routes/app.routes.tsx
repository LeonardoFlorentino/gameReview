
import {
    BrowserRouter,
    Route,
    Switch,
}
    from 'react-router-dom'

import Login from '../pages/Login'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/'>
                    <Login />
                </Route>
            </Switch>
        </BrowserRouter>
    )

}

export default Router