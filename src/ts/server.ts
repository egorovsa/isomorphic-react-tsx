import * as express from 'express';
import * as React  from 'react';
import * as ReactDOMServer from 'react-dom/server';
import * as fs from 'fs';
import * as path from 'path';
import * as handlebars from 'handlebars';
import {match, RouterContext} from 'react-router';
import {AppControllers} from "./controllers/controllers";
import {AppRouter} from "./router";
import {UtilsService} from "./services/UtilsService";

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

app.use((req, res, next) => {
	if (req.path.indexOf('.') >= 0) {
		return res.status(500).send();
	}

	next();
});

app.use((req, res) => {
	let routing = new AppRouter();
	let routes = routing.mainRoute(true);

	match({routes, location: req.url}, (error, nextLocation, nextState) => {
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
			keywords: metadata.keywords,
			initialState: global['_INITIAL_STATE_'] ? JSON.stringify(global['_INITIAL_STATE_']) : JSON.stringify({})
		}
	);
}

function isControllerWebroot(controller: string) {
	let dir = fs.readdirSync(path.resolve(__dirname, './../webroot'));

	return dir.indexOf(controller) >= 0;
}

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
	console.log(`Server listening on: ${PORT}`);
});