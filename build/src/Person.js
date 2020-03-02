"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person() {
        this._displayName = "";
        this._accountId = "";
        this._accountType = "";
        this._email = "";
    }
    Object.defineProperty(Person.prototype, "displayName", {
        get: function () {
            return this._displayName;
        },
        set: function (v) {
            this._displayName = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "accountId", {
        get: function () {
            return this._accountId;
        },
        set: function (v) {
            this._accountId = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "accountType", {
        get: function () {
            return this._accountType;
        },
        set: function (v) {
            this._accountType = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (v) {
            this._email = v;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=Person.js.map