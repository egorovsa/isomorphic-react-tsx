import * as React from 'react';
import {Router, Route, IndexRoute, browserHistory, RouterState} from 'react-router';
import {ControllersList} from "./controllers/controllers-list";
import {ControllerRender} from "./lib/controllers/controller";
import {CONFIG} from "./config";
import objectAssign = require("object-assign");

export class AppRouter {

	public mainRoute(server?: boolean): JSX.Element {
		let paramsPath: string = this.makeParamsPath();

		return (
			<Route path={paramsPath}>
				<IndexRoute
					onEnter={(data: RouterState, replace, next) => {
						let controllers = new ControllersList(data);
						let parsedParams = this.parseParams(controllers, data);
						let render: ControllerRender = controllers[parsedParams.controller][parsedParams.action](...parsedParams.params);

						data.routes[0].component = render.layout ? render.layout : CONFIG.DEFAULT_LAYOUT_COMPONENT;
						data.routes[1].component = render.component;

						if (server) {
							render.promises.then(() => {
								next();
							});
						} else {
							next();
						}
					}}
				/>
			</Route>
		);
	}

	public parseParams(controllers: ControllersList, data: RouterState) {
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


