import * as React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {AppComponent} from "./components/app";
import {MainPageComponent} from "./components/pages/main-page";
import {Controllers} from "./controllers/controllers";
import {TestComponent} from "./components/pages/test-component";
import {PagesComponent} from "./components/pages/pages-component";
import {App1Component} from "./components/app1";

let routeMap: JSX.Element = (
	<Route path="/" component={AppComponent}>
		<IndexRoute component={MainPageComponent}/>

		<Route path=":controller">
			<IndexRoute getComponent={(data, cb) => {
				let controllers = new Controllers(data);
				let params: any = data['params'];

				controllers.isPage(params.controller, 'index', () => {
					cb(null, controllers[params.controller]['index']().component);
				});
			}}/>

			<Route
				path=":action"
				onEnter={(data) => {
					let controllers = new Controllers(data);
					let params: any = data.params;

					controllers.isPage(params.controller, params.action, () => {
						if (controllers[params.controller][params.action]().layout) {
							data.routes[0].component = controllers[params.controller][params.action]().layout
						}
					});
				}}
				getComponent={(data, cb) => {
					let controllers = new Controllers(data);
					let params: any = data.params;

					controllers.isPage(params.controller, params.action, () => {
						cb(null, controllers[params.controller][params.action]().component);
					});

				}}>

			</Route>
		</Route>


	</Route>
);

export default routeMap;

export let ROUTER = (
	<Router history={browserHistory}>
		{routeMap}
	</Router>
);

