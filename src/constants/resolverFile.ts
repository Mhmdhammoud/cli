export default (
	titleName: string,
	serviceName: string,
	serviceClass: string,
	type: string,
	serviceFile:string
) => {
	const operationName=titleName.charAt(0).toLowerCase() + titleName.slice(1)
	return `
import {Resolver,${
		type === 'Mutation' ? 'Mutation' : 'Query'
	}} from 'type-graphql'
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
export default ${titleName}`
}
