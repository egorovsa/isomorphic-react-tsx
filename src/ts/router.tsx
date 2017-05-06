import * as React from 'react';
import {Router, Route, IndexRoute, browserHistory, RouterState} from 'react-router';
import {AppComponent} from "./components/layouts/app";
import {MainPageComponent} from "./components/pages/main-page";
import {Controllers} from "./controllers/controllers";
import {RenderOptions, ControllerRender} from "./lib/controllers/controller";

let getLayout = (data: RouterState) => {

};

let routeMap: JSX.Element = (
	<Route path="/" component={AppComponent} onEnter={(data) => {
	}}>
		<IndexRoute component={MainPageComponent}/>

		<Route path=":controller">
			<IndexRoute
				onEnter={(data: RouterState) => {
					let controllers = new Controllers(data);
					let controller = data.params['controller'];
					let action = 'index';

					controllers.isPage(controller, action, (err) => {
						if (!err) {
							let render: ControllerRender = controllers[data.params['controller']][action]();

							data.routes[1].component = render.component;

							if (render.layout) {
								data.routes[0].component = render.layout;
							}

							if (process && process.title === 'browser') {
								render.promises();
							}
						}
					});

				}}
			/>

			<Route
				path=":action"
				onEnter={(data: RouterState) => {
					let controllers = new Controllers(data);
					let controller = data.params['controller'];
					let action = data.params['action'];

					controllers.isPage(controller, action, (err) => {
						if (!err) {
							let render: ControllerRender = controllers[data.params['controller']][action]();

							data.routes[2].component = render.component;

							if (render.layout) {
								data.routes[0].component = render.layout;
							}

							if (process && process.title === 'browser') {
								render.promises();
							}
						}
					});
				}}

					>

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

