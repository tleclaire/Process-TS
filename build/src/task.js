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
var TaskAction_1 = require("./TaskAction");
var process_1 = require("./process");
var StringTools_1 = require("./StringTools");
var CompletedTask_1 = require("./CompletedTask");
var marshal_1 = require("@marcj/marshal");
var TaskResultCollection_1 = require("./TaskResultCollection");
var Task = /** @class */ (function () {
    function Task() {
        this.id = marshal_1.uuid();
        this.results = new TaskResultCollection_1.TaskResultCollection([]);
        this.name = '';
        this.role = '';
        this.action = TaskAction_1.TaskAction.None;
        this.processStatus = '';
        this.formUrl = '';
        this.actionProperties = {};
        this.actionProperties['TaskActivityAssembly'] = 'AssemblyName';
        this.parentProcess = new process_1.Process();
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
        return this.results.getNextTask(value);
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
    __decorate([
        marshal_1.f.primary().uuid(),
        __metadata("design:type", String)
    ], Task.prototype, "id", void 0);
    __decorate([
        marshal_1.f,
        __metadata("design:type", String)
    ], Task.prototype, "name", void 0);
    __decorate([
        marshal_1.f.enum(TaskAction_1.TaskAction),
        __metadata("design:type", Number)
    ], Task.prototype, "action", void 0);
    __decorate([
        marshal_1.f,
        __metadata("design:type", String)
    ], Task.prototype, "role", void 0);
    __decorate([
        marshal_1.f,
        __metadata("design:type", String)
    ], Task.prototype, "processStatus", void 0);
    __decorate([
        marshal_1.f,
        __metadata("design:type", String)
    ], Task.prototype, "formUrl", void 0);
    __decorate([
        marshal_1.f.type(TaskResultCollection_1.TaskResultCollection),
        __metadata("design:type", TaskResultCollection_1.TaskResultCollection)
    ], Task.prototype, "results", void 0);
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map