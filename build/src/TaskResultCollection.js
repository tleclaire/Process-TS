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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var TaskResult_1 = require("./TaskResult");
var marshal_1 = require("@marcj/marshal");
var TaskResultCollection = /** @class */ (function () {
    function TaskResultCollection(tasks) {
        this.tasks = [];
        this.tasks = tasks;
    }
    TaskResultCollection.prototype.count = function () {
        return this.tasks.length;
    };
    TaskResultCollection.prototype.last = function () {
        return this.tasks[this.tasks.length];
    };
    TaskResultCollection.prototype.getNextTask = function (value) {
        var result = this.tasks.find(function (r) { return r.evaluate(value); });
        if (result) {
            return result.nextTaskId;
        }
        return "";
    };
    TaskResultCollection.prototype.remove = function (task) {
        var index = this.tasks.indexOf(task, 0);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
    };
    TaskResultCollection.prototype.push = function (task) {
        return this.tasks.push(task);
    };
    __decorate([
        (marshal_1.f.forwardArray(function () { return TaskResult_1.TaskResult; }).decorated()),
        __metadata("design:type", Array)
    ], TaskResultCollection.prototype, "tasks", void 0);
    TaskResultCollection = __decorate([
        __param(0, marshal_1.f.array(TaskResult_1.TaskResult).decorated()),
        __metadata("design:paramtypes", [Array])
    ], TaskResultCollection);
    return TaskResultCollection;
}());
exports.TaskResultCollection = TaskResultCollection;
//# sourceMappingURL=TaskResultCollection.js.map