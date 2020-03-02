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
var TaskCollection = /** @class */ (function (_super) {
    __extends(TaskCollection, _super);
    function TaskCollection() {
        return _super.call(this) || this;
    }
    TaskCollection.prototype.Get = function (key) {
        return this.where(function (a) { return a.id.equals(key); }).firstOrDefault();
    };
    TaskCollection.prototype.push = function (task) {
        this.OnItemAdded(task);
        return _super.prototype.push.call(this, task);
    };
    TaskCollection.prototype.OnItemAdded = function (task) {
        if (this.itemAdded !== undefined) {
            this.itemAdded(task);
        }
    };
    return TaskCollection;
}(linq_collections_1.List));
exports.TaskCollection = TaskCollection;
//# sourceMappingURL=TaskCollection.js.map