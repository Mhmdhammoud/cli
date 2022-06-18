"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (serviceName) { return "\nimport {Field, ObjectType} from 'type-graphql'\nimport {\n\tgetModelForClass,\n\tindex,\n\tpre,\n\tqueryMethod,\n\tReturnModelType,\n} from '@typegoose/typegoose'\nimport {AsQueryMethod} from '@typegoose/typegoose/lib/types'\nimport {Alphabets} from '../types'\nimport {idGenerator} from '../utils'\n\nfunction findBy".concat(serviceName, "Id(\n\tthis: ReturnModelType<typeof User, QueryHelpers>,\n\t").concat(serviceName.toLowerCase(), "_id: ").concat(serviceName, "['").concat(serviceName.toLowerCase(), "_id']\n) {\n\treturn this.findOne({").concat(serviceName.toLowerCase(), "_id})\n}\n\ninterface QueryHelpers {\n\tfindBy").concat(serviceName, "Id: AsQueryMethod<typeof findBy").concat(serviceName, "Id>\n}\n\n@pre<").concat(serviceName, ">('save', async function (next) {\n\tconst self = this\n\tnext()\n})\n@queryMethod(findBy").concat(serviceName, "Id)\n@index({").concat(serviceName.toLowerCase(), "_id: 1})\n@ObjectType()\nexport class ").concat(serviceName, " {\n\t@Field(() => String)\n\t_id: string\n\n\t@Field(() => String)\n\t@prop({\n\t\trequired: true,\n\t\tdefault: () => '").concat(serviceName.toLowerCase(), "_'+idGenerator(Alphabets.NUMERIC, 4),\n\t\tunique: true,\n\t})\n\tuserId: string\n\n\t@Field(() => Date)\n\tcreatedAt: Date\n\n\t@Field(() => Date)\n\tupdatedAt: Date\n}\n\nexport const ").concat(serviceName, "Model = getModelForClass<typeof ").concat(serviceName, ", QueryHelpers>(").concat(serviceName, ", {\n\tschemaOptions: {versionKey: false, timestamps: true, minimize: false},\n})\n"); });
