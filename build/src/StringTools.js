"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringTools = /** @class */ (function () {
    function StringTools() {
    }
    StringTools.isNullOrEmpty = function (str) {
        return (!str || 0 === str.length);
    };
    StringTools.format = function (str) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return str.replace(/{(\d+)}/g, function (match, index) { return args[index] || ''; });
    };
    return StringTools;
}());
exports.StringTools = StringTools;
//# sourceMappingURL=StringTools.js.map