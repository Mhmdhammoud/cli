import {Formatter} from '@mhmdhammoud/meritt-utils'

export default (schemaName: string) => {
	const schemaId = `${schemaName.toLowerCase()}_id`
	const formattedSchemaName = Formatter.toUpperTitle(schemaName)
	return `
	import {Field, ObjectType} from 'type-graphql'
	import {
		getModelForClass,
		index,
		pre,
		prop,
	} from '@typegoose/typegoose'
	import {Alphabets} from '../types'
	import {idGenerator} from '../utils'
	
	@pre<${formattedSchemaName}>('save', async function (next) {
		const self = this
		next()
	})
	@index({${schemaId}: 1})
	@ObjectType()
	export class ${formattedSchemaName} extends AbstractSchema {
		@Field(() => String)
		@prop({
			required: true,
			default: () => '${schemaName.toLowerCase()}_'+idGenerator(Alphabets.NUMERIC, 6),
			unique: true,
		})
		${schemaId}: string
	}
	
	export const ${schemaName}Model = getModelForClass<typeof ${formattedSchemaName}>(${formattedSchemaName}, {
		schemaOptions: {versionKey: false, timestamps: true, minimize: false},
	})
	`
}
