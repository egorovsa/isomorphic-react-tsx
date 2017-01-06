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
