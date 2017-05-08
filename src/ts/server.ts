import * as express from 'express';
import * as React  from 'react';
import * as ReactDOMServer from 'react-dom/server';
import * as fs from 'fs';
import * as path from 'path';
import * as handlebars from 'handlebars';
import {match, RouterContext} from 'react-router';
import {AppControllers} from "./controllers/controllers";
import {AppRouter} from "./router";

const app = express();

export interface MetaData {
	title: string,
	description: string
	keywords: string,
}

let metadata: MetaData = {
	title: 'React isomorphic app',
	description: '',
	keywords: ''
};

app.use(express.static(path.join(__dirname, './../') + '/webroot'));

app.use((req, res) => {
	console.log('here');

	let routing = new AppRouter();
	let routes = routing.mainRoute(true);

	match({routes, location: req.url}, (error, nextLocation, nextState) => {
		console.log('123');

		metadata.title = "test1";

		if (!error) {
			if (nextState.params['param0'] && isControllerWebroot(nextState.params['param0'])) {
				return res.status(500).send();
			}

			if (nextLocation) {
				return res.status(301).send(nextLocation.pathname + nextLocation.search);
			}

			if (nextState) {
				let controllers = new AppControllers(nextState);
				let parsedParams = routing.parseParams(controllers, nextState);

				if (
					nextState.params['param0'] &&
					parsedParams.defaultController &&
					controllers[parsedParams.controller][parsedParams.action].length === 0
				) {
					return res.status(404).send('Not found');
				}


				// console.log(nextState.routes[1].onEnter.toString());

				nextState.routes[1].onEnter = () => {
				};

				nextState.routes[0].indexRoute.onEnter = () => {
				};

				nextState.router['routes'][1]['onEnter'] = () => {

				};

			
				console.log(nextState);
				return res.end(getServerHtml(nextState));
			} else {
				return res.status(404).send('Not found');
			}
		} else {
			return res.status(500).send(error.message);
		}
	});
});

function getServerHtml(nextState: any): string {
	let indexFile = fs.readFileSync(path.join(__dirname, './../index.html'), "utf-8");
	let template = handlebars.compile(indexFile);
	let componentHTML: string = ReactDOMServer.renderToString(React.createElement(RouterContext, nextState));

	return template(
		{
			componentHtml: componentHTML,
			title: metadata.title,
			description: metadata.description,
			keywords: metadata.keywords
		}
	);
}

function isControllerWebroot(controller: string) {
	let dir = fs.readdirSync(path.resolve(__dirname, './../webroot'));

	return dir.indexOf(controller) >= 0 || controller.indexOf('.') >= 0;
}

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
	console.log(`Server listening on: ${PORT}`);
});