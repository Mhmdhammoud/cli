"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @param str
 * @returns formated string
 * @description normalizes input to supported path and file name format.
 * Changes camelCase strings to kebab-case, replaces spaces with dash and keeps underscores.
 */
exports.default = (function (str) {
    var STRING_DASHERIZE_REGEXP = /\s/g;
    var STRING_DECAMELIZE_REGEXP = /([a-z\d])([A-Z])/g;
    return str
        .replace(STRING_DECAMELIZE_REGEXP, '$1-$2')
        .toLowerCase()
        .replace(STRING_DASHERIZE_REGEXP, '-');
});
