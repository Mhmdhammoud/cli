import {execSync} from 'child_process'
import inquirer from 'inquirer'
import {resolverFile, schemaFile, serviceFile} from '../constants'
import {Formatter} from '@mhmdhammoud/meritt-utils'
import fs from 'fs'

const resource = (name: string) => {
	const basicOptions: inquirer.QuestionCollection[] = [
		{
			type: 'list',
			name: 'runner',
			message: 'Which package manager do you prefer to use?',
			choices: ['yarn', 'npm'],
		},
	]

	name === '' &&
		basicOptions.push({
			type: 'input',
			name: 'resourceName',
			message: 'What do you want to name the resource',
			default: name,
		})

	inquirer
		.prompt(basicOptions)
		.then((innerAnswers) => {
			const config = {
				...innerAnswers,
				resourceName: name !== '' ? name : innerAnswers.resourceName,
			}
			const resolverData = resolverFile(config.resourceName)
			const serviceData = serviceFile(config.resourceName)
			const schemaData = schemaFile(config.resourceName)
			fs.writeFileSync(
				`src/resolvers/${config.resourceName.toLowerCase()}.resolver.ts`,
				resolverData
			)
			fs.writeFileSync(
				`src/services/${config.resourceName.toLowerCase()}.service.ts`,
				serviceData
			)
			fs.writeFileSync(
				`src/schemas/${config.resourceName.toLowerCase()}.schema.ts`,
				schemaData
			)
		})
		.catch((err) => {
			console.log(err)
		})
}

export default resource
