"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guid_typescript_1 = require("guid-typescript");
var TaskAction_1 = require("./TaskAction");
var process_1 = require("./process");
var linq_collections_1 = require("linq-collections");
var StringTools_1 = require("./StringTools");
var CompletedTask_1 = require("./CompletedTask");
var Task = /** @class */ (function () {
    function Task() {
        this.id = guid_typescript_1.Guid.create();
        this.name = '';
        this.role = '';
        this.action = TaskAction_1.TaskAction.None;
        this.processStatus = '';
        this.formUrl = '';
        this.actionProperties = {};
        this.actionProperties['TaskActivityAssembly'] = 'AssemblyName';
        this.parentProcess = new process_1.Process();
        this.results = new linq_collections_1.List();
    }
    Task.prototype.taskAktivityAssembly = function () {
        return this.actionProperties['TaskActivityAssembly'];
    };
    Object.defineProperty(Task.prototype, "taskAktivity", {
        get: function () {
            return this.actionProperties['TaskActivity'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "fontStyle", {
        get: function () {
            if (this.id === this.parentProcess.currentTaskId) {
                return 'bold';
            }
            return 'normal';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "enabled", {
        get: function () {
            return (this.id === this.parentProcess.currentTaskId &&
                !StringTools_1.StringTools.isNullOrEmpty(this.formUrl));
        },
        enumerable: true,
        configurable: true
    });
    //out string formattedResult fehlt noch
    Task.prototype.getNextTask = function (value) {
        var result = this.results.firstOrDefault(function (r) { return r.evaluate(value); });
        if (result) {
            return result.nextTaskId;
        }
        return guid_typescript_1.Guid.createEmpty();
    };
    Object.defineProperty(Task.prototype, "asCompletedTask", {
        get: function () {
            var completedTask = new CompletedTask_1.CompletedTask();
            completedTask.id = this.id;
            completedTask.name = this.name;
            completedTask.role = this.role;
            return completedTask;
        },
        enumerable: true,
        configurable: true
    });
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map