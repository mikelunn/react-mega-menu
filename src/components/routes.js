/**
 * Created by complunm on 6/27/2017.
 */
import * as React from 'react';
import {Route, Switch} from 'react-router';
import {Home} from "./Home";
import Counter from "./Counter";

export const routes = <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='/counter' component={ Counter } />
    <Route path="*" component={() => <div><h1>Not Found</h1></div> } />
</Switch>


export default routes;