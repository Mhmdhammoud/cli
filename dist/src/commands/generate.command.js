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
class GenerateCommand {
    load(program) {
        program
            .command('generate <schematic> [name]')
            .alias('g')
            .description(config_1.ProgramConfig.buildDescription())
            .option('--no-spec', 'Disable spec files generation.', () => false)
            .option('-n, --name [schematic name]', 'Schematic name to use.')
            .action((schematic, args, command) => __awaiter(this, void 0, void 0, function* () {
            switch ((0, utils_1.toUpperFirst)(schematic)) {
                case (0, utils_1.toUpperFirst)(types_1.SchematicType.RESOURCE):
                    console.log('resource');
                    break;
                case (0, utils_1.toUpperFirst)(types_1.SchematicType.RESOLVER):
                    console.log('RESOLVER');
                    break;
                default:
                    return;
            }
            console.log(command);
            const options = [];
            // options.push({
            // 	name: 'spec',
            // 	value:
            // 		typeof command.spec === 'boolean'
            // 			? command.spec
            // 			: command.spec.value,
            // 	options: {
            // 		passedAsInput:
            // 			typeof command.spec === 'boolean'
            // 				? false
            // 				: command.spec.passedAsInput,
            // 	},
            // })
            const inputs = [];
            // inputs.push({name: 'schematic', value: schematic})
            // inputs.push({name: 'name', value: name})
            // await this.action.handle(inputs, options)
        }));
    }
}
exports.GenerateCommand = GenerateCommand;
