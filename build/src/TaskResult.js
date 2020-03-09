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
var StringTools_1 = require("./StringTools");
var marshal_1 = require("@marcj/marshal");
var TaskResult = /** @class */ (function () {
    function TaskResult() {
        this.comment = '';
        this.formatString = '';
        this._isEqual = -1;
        this._lessThan = -1;
        this._greaterThan = -1;
        this._inBetween = '';
        this._rangeLow = -1;
        this._rangeHigh = -1;
        this.nextTaskId = marshal_1.uuid();
    }
    Object.defineProperty(TaskResult.prototype, "isEqual", {
        get: function () {
            if (this._isEqual) {
                return this._isEqual;
            }
            return -1;
        },
        set: function (v) {
            this._isEqual = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskResult.prototype, "lessThan", {
        get: function () {
            if (this._lessThan) {
                return this._lessThan;
            }
            return -1;
        },
        set: function (v) {
            this._lessThan = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskResult.prototype, "greaterThan", {
        get: function () {
            if (this._greaterThan) {
                return this._greaterThan;
            }
            return -1;
        },
        set: function (v) {
            this._greaterThan = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TaskResult.prototype, "inBetween", {
        get: function () {
            return this._inBetween;
        },
        set: function (v) {
            this._inBetween = v;
            var lowandhigh = this._inBetween.split(',');
            if (lowandhigh.length === 2) {
                this._rangeLow = +lowandhigh[0];
                this._rangeHigh = +lowandhigh[1];
            }
            else {
                this._inBetween = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    TaskResult.prototype.evaluate = function (value) {
        if (this._inBetween) {
            return value >= this._rangeLow && value <= this._rangeHigh;
        }
        if (this._lessThan) {
            return value <= this._lessThan;
        }
        if (this._greaterThan) {
            return value >= this._greaterThan;
        }
        if (this._isEqual) {
            return value === this._isEqual;
        }
        return false;
    };
    Object.defineProperty(TaskResult.prototype, "nextTask", {
        get: function () {
            if (this.parentProcess) {
                return this.parentProcess.tasks.Get(this.nextTaskId);
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    TaskResult.prototype.formatResult = function (result) {
        if (this.formatString) {
            this.formatString = "{0}";
        }
        return StringTools_1.StringTools.format(this.formatString);
    };
    __decorate([
        marshal_1.f,
        __metadata("design:type", String)
    ], TaskResult.prototype, "comment", void 0);
    __decorate([
        marshal_1.f,
        __metadata("design:type", String)
    ], TaskResult.prototype, "formatString", void 0);
    __decorate([
        marshal_1.f,
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], TaskResult.prototype, "isEqual", null);
    __decorate([
        marshal_1.f,
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], TaskResult.prototype, "lessThan", null);
    __decorate([
        marshal_1.f,
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], TaskResult.prototype, "greaterThan", null);
    __decorate([
        marshal_1.f,
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], TaskResult.prototype, "inBetween", null);
    __decorate([
        marshal_1.f,
        __metadata("design:type", String)
    ], TaskResult.prototype, "nextTaskId", void 0);
    return TaskResult;
}());
exports.TaskResult = TaskResult;
//# sourceMappingURL=TaskResult.js.map