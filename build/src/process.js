"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guid_typescript_1 = require("guid-typescript");
var TaskCollection_1 = require("./TaskCollection");
var TaskAction_1 = require("./TaskAction");
var Process = /** @class */ (function () {
    function Process() {
        this._name = "";
        this._currentTaskId = guid_typescript_1.Guid.create();
        this._tasks = new TaskCollection_1.TaskCollection();
        //    this.Tasks_ItemAdded.bind(this);
        this._tasks.itemAdded = this.Tasks_ItemAdded.bind(this);
    }
    Object.defineProperty(Process.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (v) {
            this._name = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Process.prototype, "currentTaskId", {
        get: function () {
            return this._currentTaskId;
        },
        set: function (v) {
            this._currentTaskId = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Process.prototype, "tasks", {
        get: function () {
            return this._tasks;
        },
        set: function (v) {
            this._tasks = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Process.prototype, "dialogTasks", {
        get: function () {
            return this._tasks.where(function (t) { return t.action === TaskAction_1.TaskAction.Dialog; });
        },
        enumerable: true,
        configurable: true
    });
    // public dialogTasks =  () :IEnumerable<Task> => this._tasks.where(t=>t.action==TaskAction.Dialog);
    Process.prototype.Tasks_ItemAdded = function (task) {
        task.parentProcess = this;
    };
    return Process;
}());
exports.Process = Process;
//# sourceMappingURL=process.js.map