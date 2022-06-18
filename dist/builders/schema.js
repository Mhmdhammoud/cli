"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = __importDefault(require("path"));
var constants_1 = require("../constants");
var inquirer_1 = __importDefault(require("inquirer"));
var schema = function (options) {
    var fileNameOptions = options.name === ''
        ? [
            {
                type: 'input',
                name: 'fileName',
                message: 'What do you want to call it?',
                // validate: function (input) {
                // 	let done = this.async()
                // 	if (input.includes(' ')) {
                // 		done('Spaces are not allowed')
                // 	}
                // 	done(null, true)
                // },
            },
            {
                type: 'input',
                name: 'serviceName',
                message: 'Whats the name of your service',
            },
            {
                type: 'input',
                name: 'directory',
                message: 'Where do you want to create it?',
                default: process.cwd(),
            },
        ]
        : [
            {
                type: 'input',
                name: 'directory',
                message: 'Where do you want to create it?',
                default: process.cwd(),
            },
        ];
    inquirer_1.default
        .prompt(fileNameOptions)
        .then(function (innerAnswers) {
        var fileName = options.name === ''
            ? "".concat(innerAnswers.fileName.charAt(0).toLowerCase() +
                innerAnswers.fileName.slice(1), "Schema.ts")
            : "".concat(options.name.charAt(0).toLowerCase() + options.name.slice(1), "Schema.ts");
        var serviceName = options.name === ''
            ? "".concat(innerAnswers.serviceName.charAt(0).toUpperCase() +
                innerAnswers.serviceName.slice(1))
            : "".concat(options.name.charAt(0).toUpperCase() + options.name.slice(1));
        var pathToFile = process.cwd() !== innerAnswers.directory
            ? path_1.default.join(process.cwd(), innerAnswers.directory)
            : process.cwd();
        (0, fs_1.writeFile)(path_1.default.join(pathToFile, fileName), (0, constants_1.schemaFile)(serviceName), function (err) { });
    })
        .catch(function (err) {
        console.log(err);
    });
};
exports.default = schema;
