import {SchematicType} from './enums'

export interface GenerateCommand {
	schematic: SchematicType
	name?: string
	path: string
}
