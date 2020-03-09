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
var task_1 = require("./task");
var marshal_1 = require("@marcj/marshal");
var TaskAction_1 = require("./TaskAction");
var TaskCollection = /** @class */ (function () {
    function TaskCollection(tasks) {
        var _this = this;
        this.tasks = [];
        tasks.map(function (t) { return _this.push(t); }); //damit OnItemAdded getriggert wird;
        //this.tasks = tasks;
    }
    TaskCollection.prototype.Get = function (key) {
        return this.tasks.find(function (a) { return a.id === key; });
    };
    Object.defineProperty(TaskCollection.prototype, "dialogTasks", {
        //@f.exclude()
        get: function () {
            return this.tasks.filter(function (t) { return t.action === TaskAction_1.TaskAction.Dialog; });
        },
        enumerable: true,
        configurable: true
    });
    TaskCollection.prototype.push = function (task) {
        this.OnItemAdded(task);
        console.log("new task added " + task.name);
        return this.tasks.push(task);
    };
    TaskCollection.prototype.OnItemAdded = function (task) {
        if (this.itemAdded !== undefined) {
            this.itemAdded(task);
        }
    };
    TaskCollection.prototype.count = function () {
        return this.tasks.length;
    };
    __decorate([
        marshal_1.f.forwardArray(function () { return task_1.Task; }).decorated(),
        __metadata("design:type", Array)
    ], TaskCollection.prototype, "tasks", void 0);
    TaskCollection = __decorate([
        __param(0, marshal_1.f.array(task_1.Task).decorated()),
        __metadata("design:paramtypes", [Array])
    ], TaskCollection);
    return TaskCollection;
}());
exports.TaskCollection = TaskCollection;
//# sourceMappingURL=TaskCollection.js.map