"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUpperFirst = void 0;
/**
 *
 * @param str
 * @returns formated string
 * @description normalizes input to supported path and file name format.
 * Changes camelCase strings to kebab-case, replaces spaces with dash and keeps underscores.
 */
exports.default = (str) => {
    const STRING_DASHERIZE_REGEXP = /\s/g;
    const STRING_DECAMELIZE_REGEXP = /([a-z\d])([A-Z])/g;
    return str
        .replace(STRING_DECAMELIZE_REGEXP, '$1-$2')
        .toLowerCase()
        .replace(STRING_DASHERIZE_REGEXP, '-');
};
const toUpperFirst = (_) => {
    if (_) {
        return _.toLowerCase()
            .split(' ')
            .map((val) => val.charAt(0).toUpperCase() + val.slice(1))
            .join(' ')
            .split('_')
            .join(' ');
    }
    return '';
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
