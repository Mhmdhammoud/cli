"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.INFO_PREFIX = exports.ERROR_PREFIX = void 0;
const chalk_1 = __importDefault(require("chalk"));
exports.ERROR_PREFIX = chalk_1.default.bgRgb(210, 0, 75).bold.rgb(0, 0, 0)(' Error ');
exports.INFO_PREFIX = chalk_1.default.bgRgb(60, 190, 100).bold.rgb(0, 0, 0)(' Info ');
