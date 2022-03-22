#! /usr/bin/env node
const inquirer = require('inquirer')
const CreateResolver = require('./builders/resolver')
const { program } = require('commander');

// if (!process.argv[2])
// inquirer
// 	.prompt([
// 		{
// 			type: 'list',
// 			name: 'type',
// 			message: 'What do you want to create?',
// 			choices: [
// 				'Resolver',
// 				'Mutation',
// 				'Query',
// 				'Schema',
// 				'Service',
// 				'Input',
// 				'Full resource',
// 			],
// 		},
// 		{
// 			type: 'input',
// 			name: 'fileName',
// 			message: 'What do you want to call it?',
// 		},
// 		{
// 			type: 'input',
// 			name: 'directory',
// 			message: 'Where do you want to create it?',
// 			default: process.cwd(),
// 		},
// 	])
// 	.then((answers) => {
// 		if (answers.type === 'Resolver') {
// 			CreateResolver(answers)
// 		}
// 		// mkdir(path.join(process.cwd(),'what.json'),(err)=>{
// 		//
// 		// })
// 	})
// 	.catch((error) => {
// 		if (error.isTtyError) {
// 			// Prompt couldn't be rendered in the current environment
// 		} else {
// 			// Something else went wrong
// 		}
// 	})

const type=process.argv[2]

program
	.name('Meritt.dev cli')
	.description('CLI to some automating module creation')
	.version('0.8.0');

program.command('create')
	.description('Creates files and directories with basic boiler plate templates')
	.argument('<string>', 'resource type')
	// .option('-d, --directory', 'Destination of the created resource')
	// .option('-s, --separator <char>', 'separator character', ',')
	.action((type, options) => {
		if (type.trim().toLowerCase() === 'resolver') {
				CreateResolver()
		}
	});

program.parse();
