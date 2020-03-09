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
var marshal_1 = require("@marcj/marshal");
var Person = /** @class */ (function () {
    function Person() {
        this.displayName = "";
        this.accountId = "";
        this.accountType = "";
        this.email = "";
    }
    __decorate([
        marshal_1.f,
        __metadata("design:type", String)
    ], Person.prototype, "displayName", void 0);
    __decorate([
        marshal_1.f,
        __metadata("design:type", String)
    ], Person.prototype, "accountId", void 0);
    __decorate([
        marshal_1.f,
        __metadata("design:type", String)
    ], Person.prototype, "accountType", void 0);
    __decorate([
        marshal_1.f,
        __metadata("design:type", String)
    ], Person.prototype, "email", void 0);
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=Person.js.map