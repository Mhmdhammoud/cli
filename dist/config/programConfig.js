"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var cli_table3_1 = __importDefault(require("cli-table3"));
var schematics_1 = require("../schematics");
var ProgramConfig = /** @class */ (function () {
    function ProgramConfig() {
    }
    ProgramConfig.buildDescription = function () {
        return ('Generate a Nest element.\n' +
            "  Schematics available on ".concat(chalk_1.default.bold('@nestjs/schematics'), " collection:\n") +
            this.buildSchematicsListAsTable());
    };
    ProgramConfig.buildSchematicsListAsTable = function () {
        var leftMargin = '    ';
        var tableConfig = {
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
        var table = new cli_table3_1.default(tableConfig);
        for (var _i = 0, _a = schematics_1.MerittCollection.getSchematics(); _i < _a.length; _i++) {
            var schematic = _a[_i];
            table.push([
                chalk_1.default.green(schematic.name),
                chalk_1.default.cyan(schematic.alias),
                schematic.description,
            ]);
        }
        return table.toString();
    };
    return ProgramConfig;
}());
exports.default = ProgramConfig;
