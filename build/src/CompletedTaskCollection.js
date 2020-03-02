"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var linq_collections_1 = require("linq-collections");
var CompletedTaskCollection = /** @class */ (function (_super) {
    __extends(CompletedTaskCollection, _super);
    function CompletedTaskCollection() {
        return _super.call(this) || this;
    }
    CompletedTaskCollection.prototype.Get = function (key) {
        return this.where(function (a) { return a.id.equals(key); }).firstOrDefault();
    };
    return CompletedTaskCollection;
}(linq_collections_1.List));
exports.CompletedTaskCollection = CompletedTaskCollection;
//# sourceMappingURL=CompletedTaskCollection.js.map