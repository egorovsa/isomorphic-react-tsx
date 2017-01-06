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
