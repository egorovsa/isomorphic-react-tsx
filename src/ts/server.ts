import * as express from 'express';
import * as React  from 'react';
import * as ReactDOMServer from 'react-dom/server';
import * as fs from 'fs';
import * as path from 'path';
import * as handlebars from 'handlebars';
import {match, RouterContext} from 'react-router';
import routes from './router';
import {Controllers} from "./controllers/controllers";

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
	match({routes, location: req.url}, (error, nextLocation, nextState) => {
		metadata.title = "test";

		if (!error) {
			if (nextLocation) {
				return res.status(301).send(nextLocation.pathname + nextLocation.search);
			}

			if (nextState) {
				let controllers = new Controllers(nextState);

				controllers.isPage(nextState.params['controller'], nextState.params['action'], (err) => {
					if (!err) {
						controllers[nextState.params['controller']][nextState.params['action']]().promises().then(() => {
							return res.end(getServerHtml(nextState));
						});
					} else {
						return res.status(404).send('Not found');
					}
				});
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

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
	console.log(`Server listening on: ${PORT}`);
});