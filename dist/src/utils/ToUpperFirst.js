"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpperFirst = void 0;
const toUpperFirst = (_) => {
    if (_) {
        return _.toLowerCase()
            .split(' ')
            .map((val) => val.charAt(0).toUpperCase() + val.slice(1))
            .join(' ')
            .split('_')
            .join(' ');
    }
    return null;
};
exports.toUpperFirst = toUpperFirst;
String.prototype.toUpperFirst = function () {
    return this.toLowerCase()
        .split(' ')
        .map((val) => val.charAt(0).toUpperCase() + val.slice(1))
        .join(' ')
        .split('_')
        .join(' ');
};
exports.default = exports.toUpperFirst;
