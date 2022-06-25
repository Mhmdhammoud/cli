import {SchematicType} from './enums'

export interface Schematic {
	name: SchematicType;
	alias: string;
	description: string;
}
