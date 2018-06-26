import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Signup from './components/Signup/Signup'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import NotFound from './components/NotFound/Notfound';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/home" component={Home}/>
            <Route path="/signup" component={Signup}/>
            <Route path="*" component={NotFound}/>

        </Switch>
    </BrowserRouter>
);

export default Routes; 