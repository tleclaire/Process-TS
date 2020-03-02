"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guid_typescript_1 = require("guid-typescript");
var TaskCollection_1 = require("./TaskCollection");
var TaskAction_1 = require("./TaskAction");
var Person_1 = require("./Person");
var CompletedTaskCollection_1 = require("./CompletedTaskCollection");
var Process = /** @class */ (function () {
    function Process() {
        this._name = "";
        this._currentTaskId = guid_typescript_1.Guid.create();
        this._tasks = new TaskCollection_1.TaskCollection();
        this._tasks.itemAdded = this.Tasks_ItemAdded.bind(this);
        this._completedTasks = new CompletedTaskCollection_1.CompletedTaskCollection();
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
    Object.defineProperty(Process.prototype, "timeStamp", {
        get: function () {
            return this._timeStamp;
        },
        set: function (v) {
            this._timeStamp = v;
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
    Object.defineProperty(Process.prototype, "completedTasks", {
        get: function () {
            return this._completedTasks;
        },
        set: function (v) {
            this.completedTasks = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Process.prototype, "currentTask", {
        get: function () {
            return this._tasks.Get(this._currentTaskId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Process.prototype, "fileName", {
        get: function () {
            return this._fileName;
        },
        set: function (v) {
            this._fileName = v;
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
    Process.prototype.completeCurrentTask = function (result, taskId, taskFileName, comment, accountId, accountName, bewertungsColor, email) {
        if (this._currentTaskId !== guid_typescript_1.Guid.createEmpty()) {
            var nextTask = guid_typescript_1.Guid.createEmpty();
            var formattedResult = "";
            if (this._tasks.count() > 1) {
                nextTask = this._tasks.Get(this._currentTaskId).getNextTask(result);
            }
            var completedTask = this._tasks.Get(this._currentTaskId).asCompletedTask;
            var completedBy = new Person_1.Person();
            completedBy.accountId = accountId;
            completedBy.accountType = "User";
            completedBy.displayName = accountName;
            completedBy.email = email;
            completedTask.completedBy = completedBy;
            completedTask.result = result;
            completedTask.comment = comment;
            completedTask.formattedResult = formattedResult;
            completedTask.taskFileId = taskId;
            completedTask.taskFileName = taskFileName;
            completedTask.bewertungsColor = bewertungsColor;
            completedTask.completedDate = new Date();
            this._completedTasks.push(completedTask);
            this._currentTaskId = nextTask;
        }
    };
    Process.prototype.rollbackLastCompletedTask = function () {
        if (this._completedTasks.count() > 0) {
            while (this._completedTasks.last().taskFileId === -1) {
                this._completedTasks.remove(this._completedTasks.last());
            }
            this._currentTaskId = this._completedTasks.last().id;
            this._completedTasks.remove(this._completedTasks.last());
        }
    };
    Process.prototype.getCompletdTaskByBewertungsId = function (bewertungsId) {
        return this._completedTasks.firstOrDefault(function (c) { return c.taskFileId === bewertungsId; });
    };
    Process.prototype.getCompletdTaskByTaskFileName = function (taskFileName) {
        return this._completedTasks.firstOrDefault(function (c) { return c.taskFileName === taskFileName; });
    };
    return Process;
}());
exports.Process = Process;
//# sourceMappingURL=process.js.map