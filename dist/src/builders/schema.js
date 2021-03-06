"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const constants_1 = require("../constants");
const inquirer_1 = __importDefault(require("inquirer"));
const schema = (options) => {
    const fileNameOptions = options.name === ''
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
        .then((innerAnswers) => {
        const fileName = options.name === ''
            ? `${innerAnswers.fileName.charAt(0).toLowerCase() +
                innerAnswers.fileName.slice(1)}Schema.ts`
            : `${options.name.charAt(0).toLowerCase() + options.name.slice(1)}Schema.ts`;
        const serviceName = options.name === ''
            ? `${innerAnswers.serviceName.charAt(0).toUpperCase() +
                innerAnswers.serviceName.slice(1)}`
            : `${options.name.charAt(0).toUpperCase() + options.name.slice(1)}`;
        const pathToFile = process.cwd() !== innerAnswers.directory
            ? path_1.default.join(process.cwd(), innerAnswers.directory)
            : process.cwd();
        (0, fs_1.writeFile)(path_1.default.join(pathToFile, fileName), (0, constants_1.schemaFile)(serviceName), (err) => { });
    })
        .catch((err) => {
        console.log(err);
    });
};
exports.default = schema;
