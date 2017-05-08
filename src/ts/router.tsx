import * as React from 'react';
import {Router, Route, IndexRoute, browserHistory, RouterState} from 'react-router';
import {AppControllers} from "./controllers/controllers";
import {ControllerRender} from "./lib/controllers/controller";
import {CONFIG} from "./config";
import objectAssign = require("object-assign");

export class AppRouter {

	public mainRoute(server?: boolean): JSX.Element {
		console.log('mainRoute', server);
		let paramsPath: string = this.makeParamsPath();
		let indexRoute: JSX.Element = null;

		if (server) {
			indexRoute = this.serverRoute();
		} else {
			indexRoute = this.clientRoute();
		}

		return (
			<Route path={paramsPath}>
				{indexRoute}
			</Route>
		);
	}

	public clientRoute(): JSX.Element {
		// console.log('clientRoute');

		return (
			<IndexRoute
				onEnter={(data: RouterState) => {
						let render: ControllerRender = this.setRenderComponent(data);

						render.promises();
					}}
			/>
		)
	}

	public serverRoute(): JSX.Element {
		// console.log('serverRoute');
		return (
			<IndexRoute
				onEnter={(data: RouterState, replace, cb ) => {
						let render: ControllerRender = this.setRenderComponent(data);

						render.promises().then(()=>{
							cb();
						});
					}}
			/>
		);
	}

	public setRenderComponent(data: RouterState): ControllerRender {
		let controllers = new AppControllers(data);
		let parsedParams = this.parseParams(controllers, data);
		let render: ControllerRender = controllers[parsedParams.controller][parsedParams.action](...parsedParams.params);

		data.routes[0].component = render.layout ? render.layout : CONFIG.DEFAULT_LAYOUT_COMPONENT;
		data.routes[1].component = render.component;

		return render;
	}

	public parseParams(controllers: AppControllers, data: RouterState) {
		let params: Router.Params = objectAssign({}, data.params);
		let controller = CONFIG.DEFAULT_CONTROLLER;
		let action = CONFIG.DEFAULT_ACTION;
		let defaultController: boolean = false;
		let defaultAction: boolean = false;

		if (controllers.isController(params['param0'])) {
			controller = params['param0'];

			if (controllers.isAction(params['param0'], params['param1'])) {
				action = params['param1'];

				delete params['param1'];
			} else {
				defaultAction = true;
			}

			delete params['param0'];
		} else {
			defaultController = true;
		}

		return {
			controller: controller,
			action: action,
			params: this.paramsToArray(params),
			defaultController: defaultController,
			defaultAction: defaultAction
		}
	}

	public paramsToArray(params: Router.Params): string[] {
		let paramsArray: string[] = [];

		for (let key in params) {
			paramsArray.push(params[key])
		}

		return paramsArray;
	}

	public makeParamsPath(): string {
		let params: string = '';

		for (let i = 0; i < 20; i++) {
			if (i === 0) {
				params += `(:param${i})`;
			} else {
				params += `(/:param${i})`;
			}
		}

		return params;
	}

	public router() {
		return (
			<Router history={browserHistory}>
				{this.mainRoute()}
			</Router>
		)
	}
}


