import * as React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {AppComponent} from "./components/app";
import {MainPageComponent} from "./components/pages/main-page";
import {PagesComponent} from "./components/pages/test-page";

let routeMap: JSX.Element = (
	<Route path="/" component={AppComponent}>
		<IndexRoute component={MainPageComponent} onEnter={(routeData) => {
			// console.log(routeData);
		}}/>
		<Route path="/pages/:slug" component={PagesComponent}/>
	</Route>
);

export default routeMap;

export let ROUTER = (
	<Router history={browserHistory}>
		{routeMap}
	</Router>
);

