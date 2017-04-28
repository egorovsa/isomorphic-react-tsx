import * as React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {AppComponent} from "./components/app";
import {MainPageComponent} from "./components/pages/main-page";
import {TestPageComponent} from "./components/pages/test-page";

let routeMap: JSX.Element = (
    <Route path="/" component={AppComponent}>
        <IndexRoute component={MainPageComponent}/>
        <Route path="/test" component={TestPageComponent}/>
    </Route>
);

export default routeMap;

export let ROUTER = (
    <Router history={browserHistory}>
        {routeMap}
    </Router>
);

