"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var react_router_1 = require("react-router");
var router_1 = require("./router");
window.onload = function () {
    ReactDOM.render(React.createElement(react_router_1.Router, { history: react_router_1.browserHistory }, router_1.default), document.getElementById('app'));
};
