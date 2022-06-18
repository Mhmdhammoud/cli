#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var builders_1 = require("./builders/");
var commander_1 = require("commander");
var package_json_1 = __importDefault(require("../package.json"));
var utils_1 = require("./utils");
var chalk_1 = __importDefault(require("chalk"));
var config_1 = require("./config");
// if (!process.argv[2])
// inquirer
// 	.prompt([
// 		{
// 			type: 'list',
// 			name: 'type',
// 			message: 'What do you want to create?',
// 			choices: [
// 				'Resolver',
// 				'Mutation',
// 				'Query',
// 				'Schema',
// 				'Service',
// 				'Input',
// 				'Full resource',
// 			],
// 		},
// 		{
// 			type: 'input',
// 			name: 'fileName',
// 			message: 'What do you want to call it?',
// 		},
// 		{
// 			type: 'input',
// 			name: 'directory',
// 			message: 'Where do you want to create it?',
// 			default: process.cwd(),
// 		},
// 	])
// 	.then((answers) => {
// 		if (answers.type === 'Resolver') {
// 			CreateResolver(answers)
// 		}
// 		// mkdir(path.join(process.cwd(),'what.json'),(err)=>{
// 		//
// 		// })
// 	})
// 	.catch((error) => {
// 		if (error.isTtyError) {
// 			// Prompt couldn't be rendered in the current environment
// 		} else {
// 			// Something else went wrong
// 		}
// 	})
// const type = process.argv[2]
commander_1.program
    .name('Meritt.dev cli')
    .description(config_1.ProgramConfig.buildDescription())
    .version(package_json_1.default.version, '-v, --version', 'Output the current version.');
commander_1.program
    .command('create')
    .description('Creates files and directories with basic boiler plate templates')
    .argument('<string>', 'resource type')
    .option('-n, --name <string>', 'File name', '')
    .helpOption('-h, --help', 'Output usage information.')
    // .option('-s, --separator <char>', 'separator character', ',')
    .action(function (rawType, options) {
    var type = rawType.trim().toLowerCase();
    switch (type) {
        case 'resolver':
            (0, builders_1.resolverBuilder)(options);
            break;
        case 'schema':
            (0, builders_1.schemaBuilder)(options);
            break;
        default:
            return;
    }
});
commander_1.program.on('command:*', function () {
    console.error("\n".concat(utils_1.ERROR_PREFIX, " Invalid command: ").concat(chalk_1.default.red('%s')), commander_1.program.args.join(' '));
    console.log("See ".concat(chalk_1.default.red('--help'), " for a list of available commands.\n"));
    process.exit(1);
});
if (!process.argv.slice(2).length) {
    commander_1.program.outputHelp();
}
commander_1.program.parse();
