#!/usr/bin/env node
import {schemaBuilder, resolverBuilder} from './builders/'
import {program} from 'commander'
import selfPackage from '../package.json'
import {ERROR_PREFIX} from './utils'
import chalk from 'chalk'
import {ProgramConfig} from './config'
import {CommandLoader} from './commands'

const bootstrap = () => {
	program
		.name('Meritt.dev cli')
		.description(ProgramConfig.buildDescription())
		.version(selfPackage.version, '-v, --version', 'Output the current version.')

	CommandLoader.load(program)
	program.parse(process.argv)

	if (!process.argv.slice(2).length) {
		program.outputHelp()
	}
}
bootstrap()
// program
// 	.command('generate').alias('g')
// 	.description(
// 		'Creates files and directories with basic boiler plate templates',
// 	)
// 	.argument('<Schematic>', 'Schematic type')
// 	.option('-n, --name <SchematicName>', 'File name', '')
// 	.helpOption('-h, --help', 'Output usage information.')
// .option('-s, --separator <char>', 'separator character', ',')
// .action((rawType, options) => {
// 	const type = rawType.trim().toLowerCase()
// 	switch (type) {
// 		case 'resolver':
// 			resolverBuilder(options)
// 			break
// 		case 'schema':
// 			schemaBuilder(options)
// 			break
// 		case 'resource':
// 		default:
// 			return
// 	}
// })
// program.command('generate').alias('g')
// 	.description(
// 		'Generates files and directories with basic boiler plate templates',
// 	)
// 	.argument('<Schematic>', 'Schematic type')
// 	.option('-n, --name <SchematicName>', 'File name', '')
// 	.helpOption('-h, --help', 'Output usage information.').description(ProgramConfig.buildDescription())
//
// program.command('new').alias('n')
// 	.description(
// 		'Creates files and directories with basic boiler plate templates',
// 	)
// 	.argument('<Schematic>', 'Schematic type')
// 	.option('-n, --name <SchematicName>', 'File name', '')
// 	.helpOption('-h, --help', 'Output usage information.').description(ProgramConfig.buildDescription())
//
//
// program.on('command:*', () => {
// 	console.error(
// 		`\n${ERROR_PREFIX} Invalid command: ${chalk.red('%s')}`,
// 		program.args.join(' '),
// 	)
// 	console.log(`See ${chalk.red('--help')} for a list of available commands.\n`)
// 	process.exit(1)
// })
// if (!process.argv.slice(2).length) {
// 	program.outputHelp()
// }

