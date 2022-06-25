import {Command} from 'commander'
import {Input, Schematic, SchematicType} from '../types'
import {ProgramConfig} from '../config'
import {toUpperFirst} from '../utils'
import {resolverBuilder} from '../builders'

export class GenerateCommand {
	public load(program: Command) {
		program
			.command('generate <schematic> [name]')
			.alias('g')
			.description(ProgramConfig.buildDescription())
			.option(
				'-n, --name [schematic name]',
				'Schematic name to use.',
			)
			.option(
				'-p, --path [schematic path]',
				'Schematic path to use.',
			)
			.action(
				async (
					schematic,
					args,
					command,
				) => {
					const options: Input[] = []

					options.push({
						name: 'path',
						value:
							command.path
								? command.path
								: '',
					})
					options.push({
						name: 'name',
						value:
							command.name
								? command.name
								: '',
					})
					switch (toUpperFirst(schematic)) {
						case toUpperFirst(SchematicType.RESOURCE):
							break
						case toUpperFirst(SchematicType.RESOLVER):
							resolverBuilder(options)
							break
						default:
							return
					}


				},
			)
	}

}
