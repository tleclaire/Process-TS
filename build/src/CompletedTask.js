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
var Person_1 = require("./Person");
var marshal_1 = require("@marcj/marshal");
var CompletedTask = /** @class */ (function () {
    function CompletedTask() {
        this.id = marshal_1.uuid();
        this.completedDate = new Date();
        this.name = "";
        this.role = "";
        this.viewUrl = "";
        this.deleteUrl = "";
        this.result = 0;
        this.formattedResult = this.result.toString();
        this.taskFileId = 0;
        this.taskFileName = "";
        this.comment = "";
        this.completedBy = new Person_1.Person();
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
    __decorate([
        marshal_1.f.primary().uuid(),
        __metadata("design:type", String)
    ], CompletedTask.prototype, "id", void 0);
    __decorate([
        marshal_1.f,
        __metadata("design:type", String)
    ], CompletedTask.prototype, "name", void 0);
    __decorate([
        marshal_1.f,
        __metadata("design:type", String)
    ], CompletedTask.prototype, "role", void 0);
    __decorate([
        marshal_1.f,
        __metadata("design:type", Number)
    ], CompletedTask.prototype, "result", void 0);
    __decorate([
        marshal_1.f,
        __metadata("design:type", String)
    ], CompletedTask.prototype, "formattedResult", void 0);
    __decorate([
        marshal_1.f,
        __metadata("design:type", Number)
    ], CompletedTask.prototype, "taskFileId", void 0);
    __decorate([
        marshal_1.f,
        __metadata("design:type", String)
    ], CompletedTask.prototype, "taskFileName", void 0);
    __decorate([
        marshal_1.f,
        __metadata("design:type", String)
    ], CompletedTask.prototype, "comment", void 0);
    __decorate([
        marshal_1.f.type(Person_1.Person),
        __metadata("design:type", Person_1.Person)
    ], CompletedTask.prototype, "completedBy", void 0);
    __decorate([
        marshal_1.f,
        __metadata("design:type", String)
    ], CompletedTask.prototype, "bewertungsColor", void 0);
    __decorate([
        marshal_1.f,
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], CompletedTask.prototype, "foreColor", null);
    __decorate([
        marshal_1.f.type(Date),
        __metadata("design:type", Date)
    ], CompletedTask.prototype, "completedDate", void 0);
    return CompletedTask;
}());
exports.CompletedTask = CompletedTask;
//# sourceMappingURL=CompletedTask.js.map