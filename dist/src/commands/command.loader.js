"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const ui_1 = require("../ui");
const generate_command_1 = require("./generate.command");
class CommandLoader {
    static load(program) {
        // new NewCommand(new NewAction()).load(program);
        // new BuildCommand(new BuildAction()).load(program);
        // new StartCommand(new StartAction()).load(program);
        // new InfoCommand(new InfoAction()).load(program);
        // new UpdateCommand(new UpdateAction()).load(program);
        // new AddCommand(new AddAction()).load(program);
        new generate_command_1.GenerateCommand().load(program);
        this.handleInvalidCommand(program);
    }
    static handleInvalidCommand(program) {
        program.on('command:*', () => {
            console.error(`\n${ui_1.ERROR_PREFIX} Invalid command: ${chalk_1.default.red('%s')}`, program.args.join(' '));
            console.log(`See ${chalk_1.default.red('--help')} for a list of available commands.\n`);
            process.exit(1);
        });
    }
}
exports.default = CommandLoader;
