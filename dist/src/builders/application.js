"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const resolver = (options) => {
    const nameOption = options.find(option => option.name === 'name');
    const innerPath = options.find(option => option.name === 'path');
    const basicOptions = [
        {
            type: 'list',
            name: 'packageManager',
            message: 'Choose the package that you want to use',
            choices: ['yarn', 'npm'],
        },
    ];
    nameOption.value === '' &&
        basicOptions.push({
            type: 'input',
            name: 'applicationName',
            message: 'What do you want to name the application',
            choices: ['yarn', 'npm'],
        });
    innerPath.value === ''
        && basicOptions.push({
            type: 'input',
            name: 'path',
            message: 'Where do you want to create it?',
            //@ts-ignore
            default: process.cwd(),
        });
    inquirer_1.default
        .prompt(basicOptions)
        .then((innerAnswers) => {
        console.log(innerAnswers);
        console.log(options);
        // const fileName =
        // 	nameOption.value === ''
        // 		? normalizeToKebabOrSnakeCase(`${
        // 			innerAnswers.fileName.charAt(0).toLowerCase() +
        // 			innerAnswers.fileName.slice(1)
        // 		}Resolver.ts`)
        // 		: normalizeToKebabOrSnakeCase(`${
        // 			nameOption.value.toString().charAt(0).toLowerCase() + nameOption.value.toString().slice(1)
        // 		}Resolver.ts`)
        // const titleName =
        // 	nameOption.value === ''
        // 		? `${
        // 			innerAnswers.fileName.charAt(0).toUpperCase() +
        // 			innerAnswers.fileName.slice(1)
        // 		}`
        // 		: `${
        // 			nameOption.value.toString().charAt(0).toUpperCase() + nameOption.value.toString().slice(1)
        // 		}`
        // const serviceClass = `${
        // 	innerAnswers.serviceName.charAt(0).toUpperCase() +
        // 	innerAnswers.serviceName.slice(1)
        // }`.replace('-', '')
        // const splitServiceName = innerAnswers.serviceName.split('-')
        // const serviceName = `${
        // 	splitServiceName[0] +
        // 	splitServiceName[1].charAt(0).toUpperCase() + splitServiceName[1].slice(1)
        // }`
        // const pathToFile = innerPath.value === '' ? path.join(innerAnswers.path, fileName)
        // 	: path.join(process.cwd(), innerPath.value.toString(), fileName)
        // writeFile(
        // 	pathToFile,
        // 	resolverFile(
        // 		titleName,
        // 		serviceName,
        // 		serviceClass,
        // 		innerAnswers.type,
        // 		innerAnswers.serviceName,
        // 	),
        // 	(err) => {
        // 		if (err) {
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
