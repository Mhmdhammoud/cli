#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("./builders/");
const commander_1 = require("commander");
const package_json_1 = __importDefault(require("../package.json"));
const utils_1 = require("./utils");
const chalk_1 = __importDefault(require("chalk"));
const config_1 = require("./config");
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
    .action((rawType, options) => {
    const type = rawType.trim().toLowerCase();
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
commander_1.program.on('command:*', () => {
    console.error(`\n${utils_1.ERROR_PREFIX} Invalid command: ${chalk_1.default.red('%s')}`, commander_1.program.args.join(' '));
    console.log(`See ${chalk_1.default.red('--help')} for a list of available commands.\n`);
    process.exit(1);
});
// if (!process.argv.slice(2).length) {
// 	program.outputHelp()
// }
commander_1.program.parse();
