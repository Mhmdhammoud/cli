import {writeFile} from 'fs'
import path from 'path'
import {ResolverFile} from '../constants'
import {IMainQuestions} from '../types'
import inquirer from 'inquirer'

const resolver = (answers: IMainQuestions) => {
	const isNameAllowed = answers.fileName.includes(' ')
	if (isNameAllowed) {
		process.exit(1)
	}
	inquirer
		.prompt([
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
		])
		.then((innerAnswers) => {
			const fileName = `${answers.fileName.charAt(0).toLowerCase() + answers.fileName.slice(1)}Resolver.ts`
			const titleName = `${answers.fileName.charAt(0).toUpperCase() + answers.fileName.slice(1)}Resolver`
			const serviceName = `${innerAnswers.serviceName.charAt(0).toUpperCase() + innerAnswers.serviceName.slice(1)}`
			const pathToFile = process.cwd() !== answers.directory ? path.join(process.cwd(), answers.directory) : process.cwd()
			writeFile(path.join(pathToFile, fileName), ResolverFile(titleName, serviceName, innerAnswers.type), (err) => {
				},
			)
		}).catch(err => {
		console.log(err)
	})

}
export default resolver
