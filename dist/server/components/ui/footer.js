"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var FooterComponent = (function (_super) {
    __extends(FooterComponent, _super);
    function FooterComponent() {
        return _super.apply(this, arguments) || this;
    }
    FooterComponent.prototype.render = function () {
        return (React.createElement("footer", null,
            React.createElement("div", { className: "container main-page-header" },
                React.createElement("div", { className: "main-head" },
                    React.createElement("div", { className: "logo" },
                        React.createElement("img", { src: "./../img/logo.png" })),
                    React.createElement("div", { className: "name" },
                        React.createElement("span", null, "\u0416\u0414-\u0421\u041F\u041B\u0410\u0412")),
                    React.createElement("div", { className: "title" },
                        React.createElement("span", null, "\u041F\u0440\u0438\u0435\u043C, \u0434\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u0438 \u0432\u044B\u0432\u043E\u0437 \u043C\u0435\u0442\u0430\u043B\u043B\u043E\u043B\u043E\u043C\u0430 \u0432 \u041C\u043E\u0441\u043A\u0432\u0435 \u0438 \u043E\u0431\u043B\u0430\u0441\u0442\u0438")),
                    React.createElement("div", { className: "phones" },
                        React.createElement("span", null, "+7 (495) 456 43 46"))))));
    };
    return FooterComponent;
}(React.Component));
exports.FooterComponent = FooterComponent;
