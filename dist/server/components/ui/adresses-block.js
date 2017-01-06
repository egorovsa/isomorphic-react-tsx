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
