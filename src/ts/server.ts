import * as express from 'express';
import * as React  from 'react';
import * as ReactDOMServer from 'react-dom/server';
import * as fs from 'fs';
import * as path from 'path';
import * as handlebars from 'handlebars';
import {match, RouterContext} from 'react-router';
import routes from './router';

const app = express();

app.use(express.static(path.join(__dirname, './../') + '/webroot'));

app.use((req, res) => {

    match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
        if (!error) {
            if (redirectLocation) {
                return res.status(301).send(redirectLocation.pathname + redirectLocation.search);
            }

            if (renderProps) {
                return res.end(getServerHtml(renderProps));
            } else {
                return res.status(404).send('Not found');
            }
        } else {
            return res.status(500).send(error.message);
        }
    });
});

function getServerHtml(renderProps: any): string {
    let indexFile = fs.readFileSync('./../index.html', "utf-8");
    let template = handlebars.compile(indexFile);
    let componentHTML: string = ReactDOMServer.renderToString(React.createElement(RouterContext, renderProps));

    return template({componentHtml: componentHTML});
}

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Server listening on: ${PORT}`);
});