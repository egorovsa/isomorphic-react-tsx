import * as express from 'express';
import * as React  from 'react';
import * as ReactDOMServer from 'react-dom/server';
import * as fs from 'fs';
import * as path from 'path';
import * as handlebars from 'handlebars';
import {match, RouterContext} from 'react-router';
import routes from './router';
import {PagesActions} from "./actions/PagesAction";
import {CommonActions} from "./actions/CommonActions";
import {PagesStore} from "./stores/pages";

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
	CommonActions.getCommonData(() => {
		next();
	});
});

app.use((req, res, next) => {
	match({routes, location: req.url}, (error, nextLocation, nextState) => {
		if (!error) {
			if (nextState && nextState.params && nextState.params['slug']) {
				PagesActions.pagesCommonData(nextState.params['slug'], (page: PagesStore.Page) => {
					metadata.title = page.title;
					metadata.keywords = page.keywords;
					metadata.description = page.description;

					return res.end(getServerHtml(nextState));
				});
			} else {
				next();
			}
		} else {
			return res.status(500).send(error.message);
		}
	});
});

app.use((req, res) => {
	match({routes, location: req.url}, (error, nextLocation, nextState) => {
		if (!error) {
			if (nextLocation) {
				return res.status(301).send(nextLocation.pathname + nextLocation.search);
			}

			if (nextState) {
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

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
	console.log(`Server listening on: ${PORT}`);
});