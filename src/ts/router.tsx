import * as React from 'react';
import {Router, Route, IndexRoute, browserHistory, RouterState} from 'react-router';
import {ControllersList} from "./controllers/controllers-list";
import {ControllerRender} from "./lib/controllers/controller";
import {CONFIG} from "./config";
import objectAssign = require("object-assign");
import {AppStore} from "./lib/stores/app";
import {RouteUtils} from "./lib/utils/route-utils";

export class AppRouter {

	public mainRoute(server?: boolean): JSX.Element {
		let paramsPath: string = RouteUtils.makeParamsPath();

		return (
			<Route path={paramsPath}>
				<IndexRoute
					onEnter={(data: RouterState, replace, next) => {

						let controllers = new ControllersList(data);
						let parsedParams = RouteUtils.parseParams(controllers, data);

						if (!parsedParams.controller) {
							replace('/page_not_found');
							next();

						} else {
							let commonFilter: Promise<any> = controllers[parsedParams.controller]['commonFilter'](...parsedParams.params);
							let render: ControllerRender = controllers[parsedParams.controller][parsedParams.action](...parsedParams.params);

							data.routes[0].component = render.layout ? render.layout : CONFIG.DEFAULT_LAYOUT_COMPONENT;

							if (render.component) {
								data.routes[1].component = render.component;
							}

							if (server) {
								commonFilter.then(() => {
									render.promises().then((data) => {
										next();
									});
								});
							} else {
								commonFilter.then(() => {
									render.promises().then(() => {

									});
								});

								next();
							}
						}
					}}
				/>
			</Route>
		);
	}


	public router() {
		return (
			<Router history={browserHistory}>
				<Route path="/page_not_found" component={CONFIG.DEFAULT_PAGE_NOT_FOUND_COMPONENT} onEnter={() => {
					AppStore.store.setState({
						appLoading: false
					} as AppStore.State);
				}}/>
				{this.mainRoute()}
			</Router>
		)
	}
}


