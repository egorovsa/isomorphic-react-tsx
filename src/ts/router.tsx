import * as React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {AppComponent} from "./components/app";
import {MainPageComponent} from "./components/pages/main-page";
import {Controllers} from "./controllers/controllers";
import {TestComponent} from "./components/pages/test-component";

let routeMap: JSX.Element = (
	<Route path="/" component={AppComponent}>
		<IndexRoute component={MainPageComponent}/>

		<Route path="/:controller/:action" onEnter={(data) => {
			let controllers = new Controllers(data);

			controllers.isPage(data.params['controller'], data.params['action'], () => {
				data.routes[1].component = () => {
					return controllers[data.params['controller']][data.params['action']]()
				}
			});

		}}/>


	</Route>
);

export default routeMap;

export let ROUTER = (
	<Router history={browserHistory}>
		{routeMap}
	</Router>
);

