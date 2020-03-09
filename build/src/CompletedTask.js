"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guid_typescript_1 = require("guid-typescript");
var CompletedTask = /** @class */ (function () {
    function CompletedTask() {
        this.id = guid_typescript_1.Guid.create();
        this.name = "";
        this.role = "";
        this.viewUrl = "";
        this.deleteUrl = "";
        this.result = 0;
        this.formattedResult = this.result.toString();
        this.taskFileId = 0;
        this.taskFileName = "";
        this.comment = "";
        this.completedBy = undefined;
        this.bewertungsColor = "";
        this.userHtml = "";
    }
    Object.defineProperty(CompletedTask.prototype, "foreColor", {
        get: function () {
            return this.bewertungsColor !== "transparent" ? "white" : "black";
        },
        enumerable: true,
        configurable: true
    });
    return CompletedTask;
}());
exports.CompletedTask = CompletedTask;
//# sourceMappingURL=CompletedTask.js.map