"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (e) {
    return (e &&
        e.stack &&
        e.message &&
        typeof e.stack === 'string' &&
        typeof e.message === 'string');
});
