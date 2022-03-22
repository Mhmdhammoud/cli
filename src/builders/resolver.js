const {writeFile} = require('fs')
const path = require('path')
const ResolverFile = require('../constants/resolverFile.js')
const inquirer = require('inquirer')

const resolver = (options) => {
	const fileNameOptions = options.name === '' ? [
		{
			type: 'input',
			name: 'fileName',
			message: 'What do you want to call it?',
			validate: function(input) {
				let done = this.async()
				if (input.includes(' ')) {
					done('Spaces are not allowed')
				}
				done(null, true)
			},
		},
		{
			type: 'input',
			name: 'serviceName',
			message: 'Whats the name of your service',
		},
		{
			type: 'list',
			name: 'type',
			message: 'Is it a mutation or a Query',
			choices: ['Mutation', 'Query'],
		},
		{
			type: 'input',
			name: 'directory',
			message: 'Where do you want to create it?',
			default: process.cwd(),
		},
	] : [{
		type: 'input',
		name: 'serviceName',
		message: 'Whats the name of your service',
	},
		{
			type: 'list',
			name: 'type',
			message: 'Is it a mutation or a Query',
			choices: ['Mutation', 'Query'],
		},
		{
			type: 'input',
			name: 'directory',
			message: 'Where do you want to create it?',
			default: process.cwd(),
		}]
	inquirer
		.prompt(fileNameOptions)
		.then((innerAnswers) => {
			const fileName = options.name === '' ? `${
				innerAnswers.fileName.charAt(0).toLowerCase() + innerAnswers.fileName.slice(1)
			}Resolver.ts` : `${
				options.name.charAt(0).toLowerCase() + options.name.slice(1)
			}Resolver.ts`
			const titleName = options.name === '' ? `${
				innerAnswers.fileName.charAt(0).toUpperCase() + innerAnswers.fileName.slice(1)
			}Resolver` : `${
				options.name.charAt(0).toUpperCase() + options.name.slice(1)
			}Resolver`
			const serviceName = `${
				innerAnswers.serviceName.charAt(0).toUpperCase() +
				innerAnswers.serviceName.slice(1)
			}`
			const pathToFile =
				process.cwd() !== innerAnswers.directory
					? path.join(process.cwd(), innerAnswers.directory)
					: process.cwd()
			writeFile(
				path.join(pathToFile, fileName),
				ResolverFile(titleName, serviceName, innerAnswers.serviceName, innerAnswers.type),
				(err) => {
				},
			)
		})
		.catch((err) => {
			console.log(err)
		})
}
module.exports = resolver
