"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var HeaderComponent = (function (_super) {
    __extends(HeaderComponent, _super);
    function HeaderComponent() {
        return _super.apply(this, arguments) || this;
    }
    HeaderComponent.prototype.render = function () {
        return (React.createElement("header", { className: "header" },
            React.createElement("div", { className: "container main-page-header" },
                React.createElement("div", { className: "main-head" },
                    React.createElement("div", { className: "logo" },
                        React.createElement("img", { src: "./../img/logo.png" })),
                    React.createElement("div", { className: "name" },
                        React.createElement("span", null, "\u0416\u0414-\u0421\u041F\u041B\u0410\u0412")),
                    React.createElement("div", { className: "title" },
                        React.createElement("span", null, "\u041F\u0440\u0438\u0435\u043C, \u0434\u0435\u043C\u043E\u043D\u0442\u0430\u0436 \u0438 \u0432\u044B\u0432\u043E\u0437 \u043C\u0435\u0442\u0430\u043B\u043B\u043E\u043B\u043E\u043C\u0430 \u0432 \u041C\u043E\u0441\u043A\u0432\u0435 \u0438 \u043E\u0431\u043B\u0430\u0441\u0442\u0438")),
                    React.createElement("div", { className: "phones" },
                        React.createElement("span", null, "+7 (495) 456 43 46"))),
                React.createElement("div", { className: "main-menu" },
                    React.createElement("div", { className: "items" },
                        React.createElement("span", { className: "desktop-menu" },
                            React.createElement("a", { href: "#", className: "active" }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"),
                            React.createElement("a", { href: "#" }, "\u041E\u043F\u0442\u043E\u0432\u0438\u043A\u0430\u043C"),
                            React.createElement("a", { href: "#" }, "\u0423\u0441\u043B\u0443\u0433\u0438"),
                            React.createElement("a", { href: "#" }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")),
                        React.createElement("span", { className: "mobile-menu" },
                            React.createElement("a", { href: "javascript:;", id: "openMobileMenu" }, "\u041C\u0415\u041D\u042E"))),
                    React.createElement("div", { className: "times" },
                        React.createElement("span", null,
                            React.createElement("span", null, " \u041F\u041D-\u041F\u0422 8.00 - 20.00"),
                            React.createElement("span", null, " \u0421\u0411-\u0412\u0421 9.00 - 18.00"))),
                    React.createElement("div", { className: "info" },
                        React.createElement("a", { href: "#" },
                            React.createElement("span", null, "\u0410\u0434\u0440\u0435\u0441\u0430 \u043F\u0443\u043D\u043A\u0442\u043E\u0432"),
                            React.createElement("span", null, " \u043F\u0440\u0438\u0435\u043C\u0430")))),
                React.createElement("div", { className: "main-price" },
                    React.createElement("div", { className: "price-header" },
                        React.createElement("div", { className: "left slide-button" }, "\u00A0"),
                        React.createElement("div", { className: "right slide-button" }, "\u00A0"),
                        React.createElement("div", { className: "heading" },
                            "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0446\u0435\u043D\u044B \u043D\u0430 \u043B\u043E\u043C \u043C\u0435\u0442\u0430\u043B\u043B\u043E\u0432",
                            React.createElement("span", null, "03.12.2016"))),
                    React.createElement("div", { className: "prices" },
                        React.createElement("div", { className: "block-container" },
                            React.createElement("div", { className: "block active" },
                                React.createElement("div", { className: "name" }, "\u041C\u0415\u0414\u042C"),
                                React.createElement("div", { className: "price" },
                                    "300",
                                    React.createElement("span", { className: "cur" }, "\u0440\u0443\u0431/\u043A\u0433")))),
                        React.createElement("div", { className: "block-container" },
                            React.createElement("div", { className: "block" },
                                React.createElement("div", { className: "name" }, "\u041B\u0410\u0422\u0423\u041D\u042C"),
                                React.createElement("div", { className: "price" },
                                    "300",
                                    React.createElement("span", { className: "cur" }, "\u0440\u0443\u0431/\u043A\u0433")))),
                        React.createElement("div", { className: "block-container" },
                            React.createElement("div", { className: "block" },
                                React.createElement("div", { className: "name" }, "\u0410\u041B\u042E\u041C\u0418\u041D\u0418\u0419"),
                                React.createElement("div", { className: "price" },
                                    "300",
                                    React.createElement("span", { className: "cur" }, "\u0440\u0443\u0431/\u043A\u0433")))),
                        React.createElement("div", { className: "block-container" },
                            React.createElement("div", { className: "block" },
                                React.createElement("div", { className: "name" }, "\u041D\u0415\u0420\u0416\u0410\u0412\u0415\u0419\u041A\u0410"),
                                React.createElement("div", { className: "price" },
                                    "300",
                                    React.createElement("span", { className: "cur" }, "\u0440\u0443\u0431/\u043A\u0433")))))))));
    };
    return HeaderComponent;
}(React.Component));
exports.HeaderComponent = HeaderComponent;
