"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guid_typescript_1 = require("guid-typescript");
var TaskCollection_1 = require("./TaskCollection");
var TaskAction_1 = require("./TaskAction");
var Person_1 = require("./Person");
var CompletedTaskCollection_1 = require("./CompletedTaskCollection");
var Process = /** @class */ (function () {
    function Process() {
        this.name = "";
        this.currentTaskId = guid_typescript_1.Guid.create();
        this.tasks = new TaskCollection_1.TaskCollection();
        this.tasks.itemAdded = this.Tasks_ItemAdded.bind(this);
        this.completedTasks = new CompletedTaskCollection_1.CompletedTaskCollection();
    }
    Object.defineProperty(Process.prototype, "currentTask", {
        get: function () {
            return this.tasks.Get(this.currentTaskId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Process.prototype, "dialogTasks", {
        get: function () {
            return this.tasks.where(function (t) { return t.action === TaskAction_1.TaskAction.Dialog; });
        },
        enumerable: true,
        configurable: true
    });
    Process.prototype.Tasks_ItemAdded = function (task) {
        task.parentProcess = this;
    };
    Process.prototype.completeCurrentTask = function (result, taskId, taskFileName, comment, accountId, accountName, bewertungsColor, email) {
        if (this.currentTaskId !== guid_typescript_1.Guid.createEmpty()) {
            var nextTask = guid_typescript_1.Guid.createEmpty();
            var formattedResult = "";
            if (this.tasks.count() > 1) {
                nextTask = this.tasks.Get(this.currentTaskId).getNextTask(result);
            }
            var completedTask = this.tasks.Get(this.currentTaskId).asCompletedTask;
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
            this.completedTasks.push(completedTask);
            this.currentTaskId = nextTask;
        }
    };
    Process.prototype.rollbackLastCompletedTask = function () {
        if (this.completedTasks.count() > 0) {
            while (this.completedTasks.last().taskFileId === -1) {
                this.completedTasks.remove(this.completedTasks.last());
            }
            this.currentTaskId = this.completedTasks.last().id;
            this.completedTasks.remove(this.completedTasks.last());
        }
    };
    Process.prototype.getCompletdTaskByBewertungsId = function (bewertungsId) {
        return this.completedTasks.firstOrDefault(function (c) { return c.taskFileId === bewertungsId; });
    };
    Process.prototype.getCompletdTaskByTaskFileName = function (taskFileName) {
        return this.completedTasks.firstOrDefault(function (c) { return c.taskFileName === taskFileName; });
    };
    return Process;
}());
exports.Process = Process;
//# sourceMappingURL=process.js.map