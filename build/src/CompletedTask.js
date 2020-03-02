"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guid_typescript_1 = require("guid-typescript");
var CompletedTask = /** @class */ (function () {
    function CompletedTask() {
        this._id = guid_typescript_1.Guid.create();
        this._name = "";
        this._role = "";
        this._viewUrl = "";
        this._deleteUrl = "";
        this._result = 0;
        this._formattedResult = this._result.toString();
        this._taskFileId = 0;
        this._taskFileName = "";
        this._comment = "";
        this._completedBy = undefined;
        this._bewertungsColor = "";
        this._userHtml = "";
    }
    Object.defineProperty(CompletedTask.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedTask.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedTask.prototype, "role", {
        get: function () {
            return this._role;
        },
        set: function (role) {
            this._role = role;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedTask.prototype, "result", {
        get: function () {
            return this._result;
        },
        set: function (v) {
            this._result = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedTask.prototype, "formattedResult", {
        get: function () {
            if (!this._formattedResult) {
                return this._result.toString();
            }
            return this._formattedResult;
        },
        set: function (v) {
            this._formattedResult = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedTask.prototype, "taskFileId", {
        get: function () {
            return this._taskFileId;
        },
        set: function (v) {
            this._taskFileId = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedTask.prototype, "taskFileName", {
        get: function () {
            return this._taskFileName;
        },
        set: function (v) {
            this._taskFileName = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedTask.prototype, "comment", {
        get: function () {
            return this._comment;
        },
        set: function (v) {
            this._comment = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedTask.prototype, "completedBy", {
        get: function () {
            return this._completedBy;
        },
        set: function (v) {
            this._completedBy = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedTask.prototype, "bewertungsColor", {
        get: function () {
            return this._bewertungsColor;
        },
        set: function (v) {
            this._bewertungsColor = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedTask.prototype, "foreColor", {
        get: function () {
            return this._bewertungsColor !== "transparent" ? "white" : "black";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedTask.prototype, "completedDate", {
        get: function () {
            return this._completedDate;
        },
        set: function (v) {
            this._completedDate = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedTask.prototype, "deleteUrl", {
        get: function () {
            return this._deleteUrl;
        },
        set: function (v) {
            this._deleteUrl = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedTask.prototype, "viewUrl", {
        get: function () {
            return this._viewUrl;
        },
        set: function (formUrl) {
            this._viewUrl = formUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompletedTask.prototype, "userHtml", {
        get: function () {
            return this._userHtml;
        },
        set: function (v) {
            this._userHtml = v;
        },
        enumerable: true,
        configurable: true
    });
    return CompletedTask;
}());
exports.CompletedTask = CompletedTask;
//# sourceMappingURL=CompletedTask.js.map