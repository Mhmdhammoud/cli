'use strict'
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : {'default': mod}
}
Object.defineProperty(exports, '__esModule', {value: true})
exports.eslintConfigFile = exports.packageJsonFile = exports.schemaFile = exports.resolverFile = void 0
var resolverFile_1 = require('./resolverFile')
Object.defineProperty(exports, 'resolverFile', {
    enumerable: true, get: function() {
        return __importDefault(resolverFile_1).default
    },
})
var schemFile_1 = require('./schemFile')
Object.defineProperty(exports, 'schemaFile', {
    enumerable: true, get: function() {
        return __importDefault(schemFile_1).default
    },
})
var packageJsonFile_1 = require('./packageJsonFile')
Object.defineProperty(exports, 'packageJsonFile', {
    enumerable: true, get: function() {
        return __importDefault(packageJsonFile_1).default
    },
})
var eslintFile_1 = require('./eslintFile')
Object.defineProperty(exports, 'eslintConfigFile', {
    enumerable: true, get: function() {
        return __importDefault(eslintFile_1).default
    },
})
