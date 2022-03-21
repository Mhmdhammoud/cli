const createResolver = (titleName, serviceName, type) => `
			import {Resolver,${
				type === 'Mutation' ? 'Mutation' : 'Query'
			}} from 'type-graphql'
			import ${serviceName} from './${serviceName}
			@Resolver(()=>Boolean)
			class ${titleName}{
			 constructor(private readonly userService:UserService){
				this.userService = new UserService()
			 }
			 @${type === 'Mutation' ? 'Mutation' : 'Query'}(()=>String)
			  hello(){
			 return true
			 }
			}
			export default ${titleName}`
module.exports = createResolver
