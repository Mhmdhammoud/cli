import {Command} from 'commander'
import {Input, SchematicType} from '../types'
import {ProgramConfig} from '../config'
import {toUpperFirst} from '../utils'

export class GenerateCommand {
	public load(program: Command) {
		program
			.command('generate <schematic> [name]')
			.alias('g')
			.description(ProgramConfig.buildDescription())
			.option('--no-spec', 'Disable spec files generation.', () => false)
			.option(
				'-n, --name [schematic name]',
				'Schematic name to use.',
			)
			.action(
				async (
					schematic,
					args,
					command,
				) => {
					switch (toUpperFirst(schematic)) {
						case toUpperFirst(SchematicType.RESOURCE):
							console.log('resource')
							break
						case toUpperFirst(SchematicType.RESOLVER):
							console.log('RESOLVER')
							break
						default:
							return
					}
					console.log(command)
					const options: Input[] = []

					// options.push({
					// 	name: 'spec',
					// 	value:
					// 		typeof command.spec === 'boolean'
					// 			? command.spec
					// 			: command.spec.value,
					// 	options: {
					// 		passedAsInput:
					// 			typeof command.spec === 'boolean'
					// 				? false
					// 				: command.spec.passedAsInput,
					// 	},
					// })
					const inputs: Input[] = []
					// inputs.push({name: 'schematic', value: schematic})
					// inputs.push({name: 'name', value: name})
					// await this.action.handle(inputs, options)
				},
			)
	}

}
