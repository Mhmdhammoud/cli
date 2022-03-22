const createSchema = (serviceName) => `
import {Field, ObjectType} from 'type-graphql'
import {
	getModelForClass,
	index,
	pre,
	queryMethod,
	ReturnModelType,
} from '@typegoose/typegoose'
import {AsQueryMethod} from '@typegoose/typegoose/lib/types'
import {Alphabets} from '../types'
import {idGenerator} from '../utils'

function findBy${serviceName}Id(
	this: ReturnModelType<typeof User, QueryHelpers>,
	${serviceName.toLowerCase()}_id: ${serviceName}['${serviceName.toLowerCase()}_id']
) {
	return this.findOne({${serviceName.toLowerCase()}_id})
}

interface QueryHelpers {
	findBy${serviceName}Id: AsQueryMethod<typeof findBy${serviceName}Id>
}

@pre<${serviceName}>('save', async function (next) {
	const self = this
	next()
})
@queryMethod(findBy${serviceName}Id)
@index({${serviceName.toLowerCase()}_id: 1})
@ObjectType()
export class ${serviceName} {
	@Field(() => String)
	_id: string

	@Field(() => String)
	@prop({
		required: true,
		default: () => '${serviceName.toLowerCase()}_'+idGenerator(Alphabets.NUMERIC, 4),
		unique: true,
	})
	userId: string
	
	@Field(() => Date)
	createdAt: Date

	@Field(() => Date)
	updatedAt: Date
}

export const ${serviceName}Model = getModelForClass<typeof ${serviceName}, QueryHelpers>(${serviceName}, {
	schemaOptions: {versionKey: false, timestamps: true, minimize: false},
})
`
module.exports = createSchema
