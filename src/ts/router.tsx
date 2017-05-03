import * as React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {AppComponent} from "./components/app";
import {MainPageComponent} from "./components/pages/main-page";
import {PagesComponent} from "./components/pages/pages-component";
import {PagesActions} from "./actions/PagesAction";
import {Controllers} from "./controllers/controllers";

let routeMap: JSX.Element = (
	<Route path="/" component={AppComponent}>
		<IndexRoute component={MainPageComponent}/>

		<Route path="/:controller/:action" onEnter={(data) => {

			
			console.log(data);
			let controllers = new Controllers(data);

			// console.log(controllers[data.params['controller']]);

			// PagesActions.pagesCommonData(data.params['action']);

			data.routes[1].component = () => {
				return controllers[data.params['controller']]().page1();

			}

		}}/>


	</Route>
);

export default routeMap;

export let ROUTER = (
	<Router history={browserHistory}>
		{routeMap}
	</Router>
);

