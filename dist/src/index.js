#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const package_json_1 = __importDefault(require("../package.json"));
const config_1 = require("./config");
const commands_1 = require("./commands");
const bootstrap = () => {
    commander_1.program
        .name('Meritt.dev cli')
        .description(config_1.ProgramConfig.buildDescription())
        .version(package_json_1.default.version, '-v, --version', 'Output the current version.');
    commands_1.CommandLoader.load(commander_1.program);
    commander_1.program.parse(process.argv);
    if (!process.argv.slice(2).length) {
        commander_1.program.outputHelp();
    }
};
bootstrap();
// program
// 	.command('generate').alias('g')
// 	.description(
// 		'Creates files and directories with basic boiler plate templates',
// 	)
// 	.argument('<Schematic>', 'Schematic type')
// 	.option('-n, --name <SchematicName>', 'File name', '')
// 	.helpOption('-h, --help', 'Output usage information.')
// .option('-s, --separator <char>', 'separator character', ',')
// .action((rawType, options) => {
// 	const type = rawType.trim().toLowerCase()
// 	switch (type) {
// 		case 'resolver':
// 			resolverBuilder(options)
// 			break
// 		case 'schema':
// 			schemaBuilder(options)
// 			break
// 		case 'resource':
// 		default:
// 			return
// 	}
// })
// program.command('generate').alias('g')
// 	.description(
// 		'Generates files and directories with basic boiler plate templates',
// 	)
// 	.argument('<Schematic>', 'Schematic type')
// 	.option('-n, --name <SchematicName>', 'File name', '')
// 	.helpOption('-h, --help', 'Output usage information.').description(ProgramConfig.buildDescription())
//
// program.command('new').alias('n')
// 	.description(
// 		'Creates files and directories with basic boiler plate templates',
// 	)
// 	.argument('<Schematic>', 'Schematic type')
// 	.option('-n, --name <SchematicName>', 'File name', '')
// 	.helpOption('-h, --help', 'Output usage information.').description(ProgramConfig.buildDescription())
//
//
// program.on('command:*', () => {
// 	console.error(
// 		`\n${ERROR_PREFIX} Invalid command: ${chalk.red('%s')}`,
// 		program.args.join(' '),
// 	)
// 	console.log(`See ${chalk.red('--help')} for a list of available commands.\n`)
// 	process.exit(1)
// })
// if (!process.argv.slice(2).length) {
// 	program.outputHelp()
// }
