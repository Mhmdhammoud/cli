const createResolver = (titleName, serviceName, serviceFile,type) => `
import {Resolver,${type === 'Mutation' ? 'Mutation' : 'Query'}} from 'type-graphql'
import ${serviceName} from './${serviceFile}'
@Resolver(()=>Boolean)
class ${titleName} {
	constructor(private readonly ${serviceFile}:${serviceName}) {
		this.${serviceFile} = new ${serviceName}()
	}
@${type === 'Mutation' ? 'Mutation' : 'Query'}(()=>String)
	async ${titleName.split('Resolver')[0]}(){
		return true
	}
}
export default ${titleName}`
module.exports = createResolver
