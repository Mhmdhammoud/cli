"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (titleName, serviceName, serviceClass, type, serviceFile) => {
    const operationName = titleName.charAt(0).toLowerCase() + titleName.slice(1);
    return `
import {Resolver,${type === 'Mutation' ? 'Mutation' : 'Query'}} from 'type-graphql'
import ${serviceClass} from './${serviceFile}'
@Resolver(()=>Boolean)
class ${titleName} {
	constructor(private readonly ${serviceName}:${serviceClass}) {
		this.${serviceName} = new ${serviceClass}()
	}
@${type === 'Mutation' ? 'Mutation' : 'Query'}(()=>String)
	async ${operationName}(){
		return true
	}
}
export default ${titleName}`;
};
