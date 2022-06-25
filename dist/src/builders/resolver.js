"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const inquirer_1 = __importDefault(require("inquirer"));
const utils_1 = require("../utils");
const resolver = (options) => {
    const nameOption = options.find(option => option.name === 'name');
    const fileNameOptions = nameOption.value === ''
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
                type: 'list',
                name: 'type',
                message: 'Is it a mutation or a Query',
                choices: ['Mutation', 'Query'],
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
                name: 'serviceName',
                message: 'Whats the name of your service',
            },
            {
                type: 'list',
                name: 'type',
                message: 'Is it a mutation or a Query',
                choices: ['Mutation', 'Query'],
            },
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
        const fileName = nameOption.value === ''
            ? (0, utils_1.normalizeToKebabOrSnakeCase)(`${innerAnswers.fileName.charAt(0).toLowerCase() +
                innerAnswers.fileName.slice(1)}Resolver.ts`)
            : (0, utils_1.normalizeToKebabOrSnakeCase)(`${nameOption.value.toString().charAt(0).toLowerCase() + nameOption.value.toString().slice(1)}Resolver.ts`);
        const titleName = nameOption.value === ''
            ? `${innerAnswers.fileName.charAt(0).toUpperCase() +
                innerAnswers.fileName.slice(1)}`
            : `${nameOption.value.toString().charAt(0).toUpperCase() + nameOption.value.toString().slice(1)}`;
        const serviceFileName = `${innerAnswers.serviceName.charAt(0).toUpperCase() +
            innerAnswers.serviceName.slice(1)}`;
        const serviceName = (0, utils_1.normalizeToKebabOrSnakeCase)(`${innerAnswers.serviceName.charAt(0).toUpperCase() +
            innerAnswers.serviceName.slice(1)}`);
        const pathToFile = process.cwd() !== innerAnswers.directory
            ? path_1.default.join(process.cwd(), innerAnswers.directory)
            : process.cwd();
        console.log({ serviceFileName });
        console.log({ serviceName });
        console.log({ fileName });
        console.log({ titleName });
        // writeFile(
        // 	path.join(pathToFile, fileName),
        // 	resolverFile(
        // 		titleName,
        // 		serviceName,
        // 		innerAnswers.serviceName,
        // 		innerAnswers.type,
        // 	),
        // 	(err) => {
        // 		if(err){
        // 			console.error('Error writing file', err)
        // 			process.exit(1)
        // 		}
        // 	},
        // )
    })
        .catch((err) => {
        console.log(err);
    });
};
exports.default = resolver;
