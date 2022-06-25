"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateCommand = void 0;
const types_1 = require("../types");
const config_1 = require("../config");
const utils_1 = require("../utils");
const builders_1 = require("../builders");
class GenerateCommand {
    load(program) {
        program
            .command('generate <schematic> [name]')
            .alias('g')
            .description(config_1.ProgramConfig.buildDescription())
            .option('-n, --name [schematic name]', 'Schematic name to use.')
            .option('-p, --path [schematic path]', 'Schematic path to use.')
            .action((schematic, args, command) => __awaiter(this, void 0, void 0, function* () {
            const options = [];
            options.push({
                name: 'path',
                value: command.path
                    ? command.path
                    : '',
            });
            options.push({
                name: 'name',
                value: command.name
                    ? command.name
                    : '',
            });
            switch ((0, utils_1.toUpperFirst)(schematic)) {
                case (0, utils_1.toUpperFirst)(types_1.SchematicType.RESOURCE):
                    break;
                case (0, utils_1.toUpperFirst)(types_1.SchematicType.RESOLVER):
                    (0, builders_1.resolverBuilder)(options);
                    break;
                default:
                    return;
            }
        }));
    }
}
exports.GenerateCommand = GenerateCommand;
