"use strict";
var express = require("express");
var React = require("react");
var ReactDOMServer = require("react-dom/server");
var fs = require("fs");
var path = require("path");
var handlebars = require("handlebars");
var react_router_1 = require("react-router");
var router_1 = require("./router");
var app = express();
app.use(express.static(path.join(__dirname, './../') + '/webroot'));
app.use(function (req, res) {
    react_router_1.match({ routes: router_1.default, location: req.url }, function (error, redirectLocation, renderProps) {
        if (!error) {
            if (redirectLocation) {
                return res.status(301).send(redirectLocation.pathname + redirectLocation.search);
            }
            if (renderProps) {
                return res.end(getServerHtml(renderProps));
            }
            else {
                return res.status(404).send('Not found');
            }
        }
        else {
            return res.status(500).send(error.message);
        }
    });
});
function getServerHtml(renderProps) {
    var indexFile = fs.readFileSync('./../index.html', "utf-8");
    var template = handlebars.compile(indexFile);
    var componentHTML = ReactDOMServer.renderToString(React.createElement(react_router_1.RouterContext, renderProps));
    return template({ componentHtml: componentHTML });
}
var PORT = process.env.PORT || 4001;
app.listen(PORT, function () {
    console.log("Server listening on: " + PORT);
});
