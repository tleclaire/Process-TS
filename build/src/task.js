"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guid_typescript_1 = require("guid-typescript");
var TaskAction_1 = require("./TaskAction");
var process_1 = require("./process");
var Task = /** @class */ (function () {
    function Task() {
        this._id = guid_typescript_1.Guid.create();
        this._name = '';
        this._role = '';
        this._action = TaskAction_1.TaskAction.None;
        this._processStatus = '';
        this._formUrl = '';
        this._actionProperties = {};
        this._actionProperties["TaskActivityAssembly"] = "AssemblyName";
        this._parentProcess = new process_1.Process();
    }
    Object.defineProperty(Task.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "action", {
        get: function () {
            return this._action;
        },
        set: function (action) {
            this._action = action;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "role", {
        get: function () {
            return this._role;
        },
        set: function (role) {
            this._role = role;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "processStatus", {
        get: function () {
            return this._processStatus;
        },
        set: function (processStatus) {
            this._processStatus = processStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "formUrl", {
        get: function () {
            return this._formUrl;
        },
        set: function (formUrl) {
            this._formUrl = formUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "actionProperties", {
        get: function () {
            return this._actionProperties;
        },
        set: function (value) {
            this._actionProperties = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "taskAktivityAssembly", {
        get: function () {
            return this._actionProperties["TaskActivityAssembly"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "taskAktivity", {
        get: function () {
            return this._actionProperties["TaskActivity"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "parentProcess", {
        get: function () {
            return this._parentProcess;
        },
        set: function (v) {
            this._parentProcess = v;
        },
        enumerable: true,
        configurable: true
    });
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map