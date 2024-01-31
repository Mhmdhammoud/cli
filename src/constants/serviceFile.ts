import {Formatter} from '@mhmdhammoud/meritt-utils'

export default (resourceName: string) => {
	const serviceClass = Formatter.toUpperTitle(`${resourceName}Service`)
	return `class ${serviceClass} {
 	hello(){
		return 'Hello'
	}
}
export default ${serviceClass}`
}
