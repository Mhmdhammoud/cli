"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationType = exports.SchematicType = void 0;
var SchematicType;
(function (SchematicType) {
    SchematicType["APPLICATION"] = "APPLICATION";
    SchematicType["RESOLVER"] = "RESOLVER";
    SchematicType["SERVICE"] = "SERVICE";
    SchematicType["SCHEMA"] = "SCHEMA";
    SchematicType["RESOURCE"] = "RESOURCE";
    SchematicType["CLASS"] = "CLASS";
})(SchematicType = exports.SchematicType || (exports.SchematicType = {}));
var OperationType;
(function (OperationType) {
    OperationType["GENERAL"] = "GENERAL";
    OperationType["GENERATE"] = "GENERATE";
    OperationType["UPDATE"] = "UPDATE";
    OperationType["DELETE"] = "DELETE";
})(OperationType = exports.OperationType || (exports.OperationType = {}));
