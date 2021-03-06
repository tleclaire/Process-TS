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
var CompletedTask_1 = require("./CompletedTask");
var marshal_1 = require("@marcj/marshal");
var CompletedTaskCollection = /** @class */ (function () {
    function CompletedTaskCollection(tasks) {
        this.tasks = [];
        this.tasks = tasks;
    }
    CompletedTaskCollection.prototype.Get = function (key) {
        return this.tasks.find(function (a) { return a.id === key; });
    };
    CompletedTaskCollection.prototype.count = function () {
        return this.tasks.length;
    };
    CompletedTaskCollection.prototype.last = function () {
        return this.tasks[this.tasks.length];
    };
    CompletedTaskCollection.prototype.remove = function (task) {
        var index = this.tasks.indexOf(task, 0);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
    };
    CompletedTaskCollection.prototype.push = function (task) {
        return this.tasks.push(task);
    };
    CompletedTaskCollection.prototype.getCompletdTaskByBewertungsId = function (bewertungsId) {
        return this.tasks.find(function (c) { return c.taskFileId === bewertungsId; });
    };
    CompletedTaskCollection.prototype.getCompletdTaskByTaskFileName = function (taskFileName) {
        return this.tasks.find(function (c) { return c.taskFileName === taskFileName; });
    };
    __decorate([
        (marshal_1.f.forwardArray(function () { return CompletedTask_1.CompletedTask; }).decorated()),
        __metadata("design:type", Array)
    ], CompletedTaskCollection.prototype, "tasks", void 0);
    CompletedTaskCollection = __decorate([
        __param(0, marshal_1.f.array(CompletedTask_1.CompletedTask).decorated()),
        __metadata("design:paramtypes", [Array])
    ], CompletedTaskCollection);
    return CompletedTaskCollection;
}());
exports.CompletedTaskCollection = CompletedTaskCollection;
//# sourceMappingURL=CompletedTaskCollection.js.map