"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isError = exports.toUpperFirst = exports.normalizeToKebabOrSnakeCase = void 0;
var formatting_1 = require("./formatting");
Object.defineProperty(exports, "normalizeToKebabOrSnakeCase", { enumerable: true, get: function () { return __importDefault(formatting_1).default; } });
Object.defineProperty(exports, "toUpperFirst", { enumerable: true, get: function () { return formatting_1.toUpperFirst; } });
var is_error_1 = require("./is-error");
Object.defineProperty(exports, "isError", { enumerable: true, get: function () { return __importDefault(is_error_1).default; } });
__exportStar(require("./questions"), exports);
__exportStar(require("./prefixes"), exports);
