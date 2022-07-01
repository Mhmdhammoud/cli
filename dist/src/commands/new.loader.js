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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewCommand = void 0;
const types_1 = require("../types");
const utils_1 = require("../utils");
const builders_1 = require("../builders");
const inquirer_1 = __importDefault(require("inquirer"));
const ui_1 = require("../ui");
class NewCommand {
    static getApplicationNameInput(inputs) {
        return inputs.find((input) => input.name === 'name');
    }
    static askForMissingInformation(inputs) {
        return __awaiter(this, void 0, void 0, function* () {
            console.info(ui_1.MESSAGES.PROJECT_INFORMATION_START);
            console.info();
            const prompt = inquirer_1.default.createPromptModule();
            const nameInput = NewCommand.getApplicationNameInput(inputs);
            if (!nameInput.value) {
                const message = 'What name would you like to use for the new project?';
                const questions = [NewCommand.generateInput('name', message)('nest-app')];
                const answers = yield prompt(questions);
                NewCommand.replaceInputMissingInformation(inputs, answers);
            }
        });
    }
    ;
    static replaceInputMissingInformation(inputs, answers) {
        return inputs.map((input) => (input.value =
            input.value !== undefined ? input.value : answers[input.name]));
    }
    ;
    load(program) {
        try {
            program
                .command('new <schematic> [name] [alias]')
                .alias('n')
                .option('-n, --name [schematic name]', 'Schematic name to use.')
                .option('-p, --path [schematic path]', 'Schematic path to use.')
                .action((schematic, args, ignore, command) => __awaiter(this, void 0, void 0, function* () {
                const options = [];
                options.push({
                    name: 'path',
                    value: (command === null || command === void 0 ? void 0 : command.path)
                        ? command === null || command === void 0 ? void 0 : command.path
                        : '',
                });
                options.push({
                    name: 'name',
                    value: (command === null || command === void 0 ? void 0 : command.name)
                        ? command === null || command === void 0 ? void 0 : command.name
                        : '',
                });
                switch ((0, utils_1.toUpperFirst)(schematic)) {
                    case (0, utils_1.toUpperFirst)(types_1.SchematicType.APPLICATION):
                        (0, builders_1.applicationBuilder)(options);
                        break;
                    default:
                        console.log('returned');
                        return;
                }
            }));
        }
        catch (err) {
        }
    }
}
exports.NewCommand = NewCommand;
