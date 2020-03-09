"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var TaskCollection_1 = require("./TaskCollection");
var Person_1 = require("./Person");
var CompletedTaskCollection_1 = require("./CompletedTaskCollection");
var marshal_1 = require("@marcj/marshal");
var Process = /** @class */ (function () {
    function Process() {
        this.currentTaskId = marshal_1.uuid();
        this.tasks = new TaskCollection_1.TaskCollection([]);
        this.completedTasks = new CompletedTaskCollection_1.CompletedTaskCollection([]);
        this.name = "";
        this.fileName = "";
        this.currentTaskId = marshal_1.uuid();
        this.tasks.itemAdded = this.Tasks_ItemAdded.bind(this);
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
            return this.tasks.dialogTasks;
        },
        enumerable: true,
        configurable: true
    });
    Process.prototype.Tasks_ItemAdded = function (task) {
        task.parentProcess = this;
    };
    Process.prototype.completeCurrentTask = function (result, taskId, taskFileName, comment, accountId, accountName, bewertungsColor, email) {
        if (this.currentTaskId !== "") {
            var nextTask = "";
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
        return this.completedTasks.getCompletdTaskByBewertungsId(bewertungsId);
    };
    Process.prototype.getCompletdTaskByTaskFileName = function (taskFileName) {
        return this.completedTasks.getCompletdTaskByTaskFileName(taskFileName);
    };
    __decorate([
        marshal_1.f,
        __metadata("design:type", String)
    ], Process.prototype, "name", void 0);
    __decorate([
        marshal_1.f.uuid(),
        __metadata("design:type", String)
    ], Process.prototype, "currentTaskId", void 0);
    __decorate([
        marshal_1.f.type(Date),
        __metadata("design:type", Object)
    ], Process.prototype, "timeStamp", void 0);
    __decorate([
        marshal_1.f.type(TaskCollection_1.TaskCollection),
        __metadata("design:type", TaskCollection_1.TaskCollection)
    ], Process.prototype, "tasks", void 0);
    __decorate([
        marshal_1.f.type(CompletedTaskCollection_1.CompletedTaskCollection),
        __metadata("design:type", CompletedTaskCollection_1.CompletedTaskCollection)
    ], Process.prototype, "completedTasks", void 0);
    __decorate([
        marshal_1.f,
        __metadata("design:type", String)
    ], Process.prototype, "fileName", void 0);
    return Process;
}());
exports.Process = Process;
//# sourceMappingURL=process.js.map