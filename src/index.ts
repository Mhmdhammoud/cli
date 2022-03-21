import inquirer from 'inquirer'
import {CreateResolver} from './builders'
import {IMainQuestions} from './types'

inquirer
	.prompt([
		{
			type: 'list',
			name: 'type',
			message: 'What do you want to create?',
			choices: ['Resolver', 'Mutation', 'Query', 'Schema', 'Service', 'Input', 'Full resource'],
		},
		{
			type: 'input',
			name: 'fileName',
			message: 'What do you want to call it?',
		},
		{
			type: 'input',
			name: 'directory',
			message: 'Where do you want to create it?',
			default:process.cwd()
		},
	])
	.then((answers) => {
		if (answers.type === 'Resolver') {
			CreateResolver(answers as IMainQuestions)
		}
		// mkdir(path.join(process.cwd(),'what.json'),(err)=>{
		//
		// })
	})
	.catch((error) => {
		if (error.isTtyError) {
			// Prompt couldn't be rendered in the current environment
		} else {
			// Something else went wrong
		}
	})
