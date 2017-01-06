"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var header_1 = require("./ui/header");
var footer_1 = require("./ui/footer");
var sidenav_1 = require("./ui/sidenav");
var AppComponent = (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(sidenav_1.SideNavComponent, null),
            React.createElement(header_1.HeaderComponent, null),
            this.props.children,
            React.createElement(footer_1.FooterComponent, null)));
    };
    return AppComponent;
}(React.Component));
exports.AppComponent = AppComponent;
