#! /usr/bin/env node
import {schemaBuilder, resolverBuilder} from './builders/'
import {program} from 'commander'
import selfPackage from '../package.json'
import {ERROR_PREFIX} from './utils'
import chalk from 'chalk'
import {ProgramConfig} from './config'

program
	.name('Meritt.dev cli')
	.description(ProgramConfig.buildDescription())
	.version(selfPackage.version, '-v, --version', 'Output the current version.')

program
	.command('create')
	.description(
		'Creates files and directories with basic boiler plate templates'
	)
	.argument('<string>', 'resource type')
	.option('-n, --name <string>', 'File name', '')
	.helpOption('-h, --help', 'Output usage information.')
	// .option('-s, --separator <char>', 'separator character', ',')
	.action((rawType, options) => {
		const type = rawType.trim().toLowerCase()
		switch (type) {
			case 'resolver':
				resolverBuilder(options)
				break
			case 'schema':
				schemaBuilder(options)
				break
			default:
				return
		}
	})
program.on('command:*', () => {
	console.error(
		`\n${ERROR_PREFIX} Invalid command: ${chalk.red('%s')}`,
		program.args.join(' ')
	)
	console.log(`See ${chalk.red('--help')} for a list of available commands.\n`)
	process.exit(1)
})
// if (!process.argv.slice(2).length) {
// 	program.outputHelp()
// }

program.parse()
