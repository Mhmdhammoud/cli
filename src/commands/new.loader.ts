import {Command} from 'commander'
import {Input, SchematicType} from '../types'
import {toUpperFirst} from '../utils'
import {applicationBuilder} from '../builders'
import inquirer, {Answers, Question} from 'inquirer'
import {MESSAGES} from '../ui'

export class NewCommand {
	private static getApplicationNameInput(inputs: Input[]) {
		return inputs.find((input) => input.name === 'name')
	}

	private static async askForMissingInformation(inputs: Input[]) {
		console.info(MESSAGES.PROJECT_INFORMATION_START)
		console.info()

		const prompt: inquirer.PromptModule = inquirer.createPromptModule()
		const nameInput = NewCommand.getApplicationNameInput(inputs)
		if (!nameInput!.value) {
			const message = 'What name would you like to use for the new project?'
			const questions = [NewCommand.generateInput('name', message)('nest-app')]
			const answers: Answers = await prompt(questions as ReadonlyArray<Question>)
			NewCommand.replaceInputMissingInformation(inputs, answers)
		}
	};

	private static replaceInputMissingInformation(
		inputs: Input[],
		answers: Answers,
	): Input[] {
		return inputs.map(
			(input) =>
				(input.value =
					input.value !== undefined ? input.value : answers[input.name]),
		)
	};

	public load(program: Command) {
		try {
			program
				.command('new <schematic> [name] [alias]')
				.alias('n')
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
						ignore,
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
							case toUpperFirst(SchematicType.APPLICATION):
								applicationBuilder(options)
								break
							default:
								console.log('returned')
								return
						}
					},
				)
		} catch (err) {
		}
	}

}
