"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guid_typescript_1 = require("guid-typescript");
var StringTools_1 = require("./StringTools");
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
        this.nextTaskId = guid_typescript_1.Guid.createEmpty();
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
    return TaskResult;
}());
exports.TaskResult = TaskResult;
//# sourceMappingURL=TaskResult.js.map