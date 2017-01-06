"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var SideNavComponent = (function (_super) {
    __extends(SideNavComponent, _super);
    function SideNavComponent() {
        return _super.apply(this, arguments) || this;
    }
    SideNavComponent.prototype.render = function () {
        return (React.createElement("div", { className: "sidenav active", id: "sideNav" },
            React.createElement("a", { href: "javascript:void(0)", className: "closebtn", id: "sideNavClose" }, "\u00D7"),
            React.createElement("a", { href: "#" }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"),
            React.createElement("a", { href: "#" }, "\u041E\u043F\u0442\u043E\u0432\u0438\u043A\u0430"),
            React.createElement("a", { href: "#" }, "\u0423\u0441\u043B\u0443\u0433\u0438"),
            React.createElement("a", { href: "#" }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"),
            React.createElement("div", { className: "background" })));
    };
    return SideNavComponent;
}(React.Component));
exports.SideNavComponent = SideNavComponent;
