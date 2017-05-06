import * as React from 'react';
import {Router, Route, IndexRoute, browserHistory, RouterState} from 'react-router';
import {AppComponent} from "./components/layouts/app";
import {MainPageComponent} from "./components/pages/main-page";
import {Controllers} from "./controllers/controllers";
import {RenderOptions, ControllerRender} from "./lib/controllers/controller";

let getLayout = (data: RouterState) => {
	if (data['renderLayout']) {
		data.routes[0].component = data['renderLayout'];
	}
};

let routeMap: JSX.Element = (
	<Route path="/" component={AppComponent} onEnter={(data) => {


		// console.log('onEnter main', data);

		if (!data['controllers']) {
			data['controllers'] = new Controllers(data);
		}

		let controllers = data['controllers'];

		if (data.params['controller']) {
			let action = data.params['action'] ? data.params['action'] : 'index';

			controllers.isPage(data.params['controller'], action, () => {
				let render: ControllerRender = controllers[data.params['controller']][action]();

				data['renderComponent'] = render.component;
				data['renderLayout'] = render.layout;
				data['promises'] = render.promises;
			});
		}
	}}>
		<IndexRoute component={MainPageComponent}/>

		<Route path=":controller">
			<IndexRoute
				onEnter={(data: RouterState) => {
					// console.log('onEnter controller', data);
					getLayout(data);
					data.routes[1].component = data['renderComponent'];
					
					if (process && process.title === 'browser') {
						data['promises']();
					}

				}}
			/>

			<Route
				path=":action"
				onEnter={(data: RouterState) => {

					if (process) {
						console.log('process', process.title);
					}
					// console.log('onEnter action', data);
					getLayout(data);
					data.routes[2].component = data['renderComponent'];

					if (process && process.title === 'browser') {
						data['promises']();
					}
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

