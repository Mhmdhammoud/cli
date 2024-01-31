import {Formatter} from '@mhmdhammoud/meritt-utils'

export default (resourceName) => {
	const titleName = Formatter.toUpperTitle(`${resourceName}Resolver`)
	const serviceName = `${resourceName.toLowerCase()}Service`
	const serviceClass = Formatter.toUpperTitle(`${resourceName}Service`)
	return `import { Resolver, Query } from 'type-graphql'
import ${serviceClass} from '../services'
@Resolver()
class ${titleName} {
	constructor(private readonly ${serviceName}:${serviceClass}) {
		this.${serviceName} = new ${serviceClass}()
	}
@Query(()=> String)
 	hello(){
		return this.${serviceName}.hello()
	}
}
export default ${titleName}`
}
