"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaBuilder = exports.resolverBuilder = void 0;
var resolver_1 = require("./resolver");
Object.defineProperty(exports, "resolverBuilder", { enumerable: true, get: function () { return __importDefault(resolver_1).default; } });
var schema_1 = require("./schema");
Object.defineProperty(exports, "schemaBuilder", { enumerable: true, get: function () { return __importDefault(schema_1).default; } });
