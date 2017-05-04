import * as React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {AppComponent} from "./components/laouts/app";
import {MainPageComponent} from "./components/pages/main-page";
import {Controllers} from "./controllers/controllers";

let getComponent = (data, cb) => {
	let controllers = new Controllers(data);
	let params: any = data['params'];

	controllers.isPage(params.controller, params.action, () => {
		cb(null, controllers[params.controller][params.action]().component);
	});
};

let getLayout = (data) => {
	let controllers = new Controllers(data);
	let params: any = data.params;

	controllers.isPage(params.controller, params.action, () => {
		if (controllers[params.controller][params.action]().layout) {
			data.routes[0].component = controllers[params.controller][params.action]().layout
		}
	});
};

let routeMap: JSX.Element = (
	<Route path="/" component={AppComponent}>
		<IndexRoute component={MainPageComponent}/>

		<Route path=":controller">
			<IndexRoute
				onEnter={(data) => {
					data['params']['action'] = 'index';

					getLayout(data);
				}}

				getComponent={(data, cb) => {
					data['params']['action'] = 'index';

					getComponent(data, (err, component) => {
						cb(err, component);
					})
				}}
			/>

			<Route
				path=":action"
				onEnter={(data) => {
					getLayout(data);
				}}
				getComponent={(data, cb) => {
					getComponent(data, (err, component) => {
						cb(err, component);
					})
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

