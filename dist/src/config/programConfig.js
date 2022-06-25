"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const cli_table3_1 = __importDefault(require("cli-table3"));
const schematics_1 = require("../schematics");
class ProgramConfig {
    static buildDescription() {
        return ('Generate a Nest element.\n' +
            `  Schematics available on ${chalk_1.default.bold('@meritt.dev/cli')} collection:\n` +
            this.buildSchematicsListAsTable());
    }
    static buildSchematicsListAsTable() {
        const leftMargin = '    ';
        const tableConfig = {
            head: ['name', 'alias', 'description'],
            chars: {
                left: leftMargin.concat('│'),
                'top-left': leftMargin.concat('┌'),
                'bottom-left': leftMargin.concat('└'),
                mid: '',
                'left-mid': '',
                'mid-mid': '',
                'right-mid': '',
            },
        };
        const table = new cli_table3_1.default(tableConfig);
        for (const schematic of schematics_1.MerittCollection.getSchematics()) {
            table.push([
                chalk_1.default.green(schematic.name),
                chalk_1.default.cyan(schematic.alias),
                schematic.description,
            ]);
        }
        return table.toString();
    }
}
exports.default = ProgramConfig;
