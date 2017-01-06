"use strict";
var React = require("react");
var react_router_1 = require("react-router");
var app_1 = require("./components/app");
var main_page_1 = require("./components/pages/main-page");
var test_page_1 = require("./components/pages/test-page");
var routeMap = (React.createElement(react_router_1.Route, { path: "/", component: app_1.AppComponent },
    React.createElement(react_router_1.IndexRoute, { component: main_page_1.MainPageComponent }),
    React.createElement(react_router_1.Route, { path: "/test", component: test_page_1.TestPageComponent })));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = routeMap;
