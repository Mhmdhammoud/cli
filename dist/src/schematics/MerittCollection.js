"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const utils_1 = require("../utils");
class MerittCollection {
    // public async execute(name: string, options: SchematicOption[]) {
    // 	const schematic: string = this.validate(name)
    // 	await super.execute(schematic, options)
    // }
    static getSchematics() {
        return MerittCollection.schematics;
    }
    //@ts-ignore
    validate(name) {
        const schematic = MerittCollection.schematics.find((s) => s.name === name || s.alias === name);
        if (schematic === undefined || schematic === null) {
            throw new Error(`Invalid schematic "${name}". Please, ensure that "${name}" exists in this collection.`);
        }
        return schematic.name;
    }
}
MerittCollection.schematics = [
    {
        name: (0, utils_1.toUpperFirst)(types_1.SchematicType.APPLICATION),
        alias: 'application',
        description: 'Generate a new application workspace',
    },
    {
        name: (0, utils_1.toUpperFirst)(types_1.SchematicType.CLASS),
        alias: 'cl',
        description: 'Generate a new class',
    },
    {
        name: (0, utils_1.toUpperFirst)(types_1.SchematicType.RESOLVER),
        alias: 'r',
        description: 'Generate a GraphQL resolver declaration',
    },
    {
        name: (0, utils_1.toUpperFirst)(types_1.SchematicType.SERVICE),
        alias: 's',
        description: 'Generate a service declaration',
    },
    {
        name: (0, utils_1.toUpperFirst)(types_1.SchematicType.RESOURCE),
        alias: 'res',
        description: 'Generate a new CRUD resource',
    },
    // {
    // 	name: 'library',
    // 	alias: 'lib',
    // 	description: 'Generate a new library within a monorepo',
    // },
    // {
    // 	name: 'sub-app',
    // 	alias: 'app',
    // 	description: 'Generate a new application within a monorepo',
    // },
    // {
    // 	name: 'configuration',
    // 	alias: 'config',
    // 	description: 'Generate a CLI configuration file',
    // },
    // {
    // 	name: 'controller',
    // 	alias: 'co',
    // 	description: 'Generate a controller declaration',
    // },
    // {
    // 	name: 'decorator',
    // 	alias: 'd',
    // 	description: 'Generate a custom decorator',
    // },
    // {
    // 	name: 'filter',
    // 	alias: 'f',
    // 	description: 'Generate a filter declaration',
    // },
    // {
    // 	name: 'gateway',
    // 	alias: 'ga',
    // 	description: 'Generate a gateway declaration',
    // },
    // {
    // 	name: 'guard',
    // 	alias: 'gu',
    // 	description: 'Generate a guard declaration',
    // },
    // {
    // 	name: 'interceptor',
    // 	alias: 'in',
    // 	description: 'Generate an interceptor declaration',
    // },
    // {
    // 	name: 'interface',
    // 	alias: 'interface',
    // 	description: 'Generate an interface',
    // },
    // {
    // 	name: 'middleware',
    // 	alias: 'mi',
    // 	description: 'Generate a middleware declaration',
    // },
    // {
    // 	name: 'module',
    // 	alias: 'mo',
    // 	description: 'Generate a module declaration',
    // },
    // {
    // 	name: 'pipe',
    // 	alias: 'pi',
    // 	description: 'Generate a pipe declaration',
    // },
    // {
    // 	name: 'provider',
    // 	alias: 'pr',
    // 	description: 'Generate a provider declaration',
    // },
];
exports.default = MerittCollection;
