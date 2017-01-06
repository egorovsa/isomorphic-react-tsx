(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var react_router_1 = require("react-router");
var router_1 = require("./router");
window.onload = function () {
    ReactDOM.render(React.createElement(react_router_1.Router, { history: react_router_1.browserHistory }, router_1.default), document.getElementById('app'));
};

},{"./router":9,"react":"react","react-dom":"react-dom","react-router":"react-router"}],2:[function(require,module,exports){
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

},{"./ui/footer":6,"./ui/header":7,"./ui/sidenav":8,"react":"react"}],3:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var adresses_block_1 = require("../ui/adresses-block");
var MainPageComponent = (function (_super) {
    __extends(MainPageComponent, _super);
    function MainPageComponent() {
        return _super.apply(this, arguments) || this;
    }
    MainPageComponent.prototype.getTagLineBlock = function () {
        return (React.createElement("div", { className: "tagline" }, "\u041C\u044B \u0434\u043E\u0440\u043E\u0436\u0438\u043C \u043A\u0430\u0436\u0434\u044B\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C"));
    };
    MainPageComponent.prototype.getAdvantages = function () {
        return (React.createElement("div", { className: "advantages" },
            React.createElement("div", { className: "container" },
                React.createElement(adresses_block_1.AddressesBlockComponent, null),
                React.createElement("div", { className: "advant-block paid-now" },
                    React.createElement("div", { className: "left" },
                        React.createElement("img", { src: "./../img/money-3.png", alt: "" })),
                    React.createElement("div", { className: "right" },
                        React.createElement("div", { className: "title" }, "\u041E\u043F\u043B\u0430\u0442\u0430 \u0441\u0440\u0430\u0437\u0443"),
                        React.createElement("div", { className: "description" }, "\u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435 \u0434\u0435\u043D\u044C\u0433\u0438 \u0441\u0440\u0430\u0437\u0443 \u043F\u043E\u0441\u043B\u0435 \u0442\u043E\u0433\u043E, \u043A\u0430\u043A \u043E\u043D \u0431\u044B\u043B \u0432\u0437\u0432\u0435\u0448\u0435\u043D \u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u043D\u0430 \u043F\u0440\u0438\u0435\u043C \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u044B."))),
                React.createElement("div", { className: "advant-block hi-cost" },
                    React.createElement("div", { className: "left" },
                        React.createElement("img", { src: "./../img/business-1.png", alt: "" })),
                    React.createElement("div", { className: "right" },
                        React.createElement("div", { className: "title" }, "\u0412\u044B\u0441\u043E\u043A\u0438\u0435 \u0446\u0435\u043D\u044B"),
                        React.createElement("div", { className: "description" }, "\u041F\u043E\u0441\u043B\u0435 \u0442\u043E\u0447\u043D\u043E\u0433\u043E \u0432\u0437\u0432\u0435\u0448\u0438\u0432\u0430\u043D\u0438\u044F \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u043C \u0447\u0435\u0441\u0442\u043D\u0443\u044E \u0438 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043D\u0443\u044E \u0446\u0435\u043D\u0443 \u043D\u0430 \u043B\u043E\u043C \u0446\u0432\u0435\u0442\u043D\u043E\u0433\u043E \u0438 \u0447\u0435\u0440\u043D\u043E\u0433\u043E" + " " + "\u043C\u0435\u0442\u0430\u043B\u043B\u0430."))),
                React.createElement("div", { className: "advant-block pickup" },
                    React.createElement("div", { className: "left" },
                        React.createElement("img", { src: "./../img/transport-2.png", alt: "" })),
                    React.createElement("div", { className: "right" },
                        React.createElement("div", { className: "title" }, "\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437"),
                        React.createElement("div", { className: "description" }, "\u041F\u0430\u0440\u043A \u0441\u043F\u0435\u0446\u0442\u0435\u0445\u043D\u0438\u043A\u0438 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0431\u044B\u0441\u0442\u0440\u043E \u0438 \u0432 \u0443\u0434\u043E\u0431\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u043E\u0432\u0430\u0442\u044C \u0432\u044B\u0432\u043E\u0437 \u0446\u0432\u0435\u0442\u043D\u043E\u0433\u043E \u043C\u0435\u0442\u0430\u043B\u043B \u043E\u0442 300 \u043A\u0433" + " " + "\u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E."))))));
    };
    ;
    MainPageComponent.prototype.getMapSelectorBlock = function () {
        return (React.createElement("div", { className: "map-section" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "title" }, "\u0410\u0434\u0440\u0435\u0441\u0430 \u043F\u0443\u043D\u043A\u0442\u043E\u0432 \u043F\u0440\u0438\u0435\u043C\u0430 \u043C\u0435\u0442\u0430\u043B\u043B\u043E\u043B\u043E\u043C\u0430"),
                React.createElement("div", { className: "map" },
                    React.createElement("div", null,
                        React.createElement("script", { type: "text/javascript", charSet: "utf-8", src: "//api-maps.yandex.ru/services/constructor/1.0/js/?sid=ZQJjDES6vyjOPmITIlaYHYyBtLR1qM_K&&height=430" }))))));
    };
    MainPageComponent.prototype.render = function () {
        return (React.createElement("div", null,
            this.getAdvantages(),
            this.getTagLineBlock(),
            this.getMapSelectorBlock()));
    };
    return MainPageComponent;
}(React.Component));
exports.MainPageComponent = MainPageComponent;

},{"../ui/adresses-block":5,"react":"react"}],4:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var TestPageComponent = (function (_super) {
    __extends(TestPageComponent, _super);
    function TestPageComponent() {
        return _super.apply(this, arguments) || this;
    }
    TestPageComponent.prototype.render = function () {
        return (React.createElement("div", null, "THE TEST PAGE"));
    };
    return TestPageComponent;
}(React.Component));
exports.TestPageComponent = TestPageComponent;

},{"react":"react"}],5:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var AddressesBlockComponent = (function (_super) {
    __extends(AddressesBlockComponent, _super);
    function AddressesBlockComponent() {
        return _super.apply(this, arguments) || this;
    }
    AddressesBlockComponent.prototype.render = function () {
        return (React.createElement("div", { className: "addresses" },
            React.createElement("span", { className: "title" }, "\u041C\u044B \u0432\u0435\u0440\u043D\u043E \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u043B\u0438 \u0412\u0430\u0448\u0443 \u0441\u0442\u0430\u043D\u0446\u0438\u044E \u043C\u0435\u0442\u0440\u043E?"),
            React.createElement("div", { className: "metro-selector" },
                React.createElement("select", { name: "", id: "" },
                    React.createElement("option", { value: "1" }, "\u041A\u0430\u043D\u0442\u0435\u043C\u0438\u0440\u043E\u0432\u0441\u043A\u0430\u044F"),
                    React.createElement("option", { value: "2" }, "2"),
                    React.createElement("option", { value: "3" }, "3"),
                    React.createElement("option", { value: "4" }, "4"),
                    React.createElement("option", { value: "5" }, "5"))),
            React.createElement("div", { className: "addresses-phones" },
                React.createElement("div", null,
                    React.createElement("div", { className: "address" },
                        React.createElement("div", { className: "item" }, "\u0443\u043B. \u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F, \u0434 3 \u0410 (\u0417\u0430\u0435\u0437\u0434 \u0441 \u0443\u043B \u0414\u0435\u043B\u043E\u0432\u043E\u0439)")),
                    React.createElement("div", { className: "phones" },
                        React.createElement("div", { className: "item" }, "8 (903) 514 30 42"))),
                React.createElement("div", null,
                    React.createElement("div", { className: "address" },
                        React.createElement("div", { className: "item" }, "\u0443\u043B. \u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F, \u0434 3 \u0410 (\u0417\u0430\u0435\u0437\u0434 \u0441 \u0443\u043B \u0414\u0435\u043B\u043E\u0432\u043E\u0439)")),
                    React.createElement("div", { className: "phones" },
                        React.createElement("div", { className: "item" }, "8 (903) 514 30 42"))),
                React.createElement("div", null,
                    React.createElement("div", { className: "address" },
                        React.createElement("div", { className: "item" }, "\u0443\u043B. \u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F, \u0434 3 \u0410 (\u0417\u0430\u0435\u0437\u0434 \u0441 \u0443\u043B \u0414\u0435\u043B\u043E\u0432\u043E\u0439)")),
                    React.createElement("div", { className: "phones" },
                        React.createElement("div", { className: "item" }, "8 (903) 514 30 42"))))));
    };
    return AddressesBlockComponent;
}(React.Component));
exports.AddressesBlockComponent = AddressesBlockComponent;

},{"react":"react"}],6:[function(require,module,exports){
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

},{"react":"react"}],7:[function(require,module,exports){
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

},{"react":"react"}],8:[function(require,module,exports){
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

},{"react":"react"}],9:[function(require,module,exports){
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

},{"./components/app":2,"./components/pages/main-page":3,"./components/pages/test-page":4,"react":"react","react-router":"react-router"}]},{},[1])
//# sourceMappingURL=client.js.map
