import {Command} from 'commander'
import {Input, SchematicType} from '../types'
import {toUpperFirst} from '../utils'
import {resolverBuilder} from '../builders'

export class GenerateCommand {
	public load(program: Command) {
		if (!process.argv.slice(3).length) {
			program.outputHelp()
		}
		
		try {
			program
				.command('generate <schematic> [name] [alias]')
				.alias('gen')
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
								command?.path
									? command?.path
									: '',
						})
						options.push({
							name: 'name',
							value:
								command?.name
									? command?.name
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
		} catch (err) {
		}
	}

}
