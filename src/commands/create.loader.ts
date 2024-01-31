import {Command} from 'commander'
import {Input, SchematicType} from '../types'
import {generateInput, toUpperFirst} from '../utils'
import {resourceBuilder} from '../builders'
import inquirer, {Answers, Question} from 'inquirer'
import {MESSAGES} from '../ui'

export class CreateCommand {
	private static getApplicationNameInput(inputs: Input[]) {
		return inputs.find((input) => input.id === 'name')
	}

	private static async askForMissingInformation(inputs: Input[]) {
		console.info(MESSAGES.PROJECT_INFORMATION_START)
		console.info()

		const prompt: inquirer.PromptModule = inquirer.createPromptModule()
		const nameInput = CreateCommand.getApplicationNameInput(inputs)
		if (!nameInput!.value) {
			const message = 'What name would you like to use for the new project?'
			const questions = [generateInput('name', message)('nest-app')]
			const answers: Answers = await prompt(
				questions as ReadonlyArray<Question>
			)
			CreateCommand.replaceInputMissingInformation(inputs, answers)
		}
	}

	private static replaceInputMissingInformation(
		inputs: Input[],
		answers: Answers
	): Input[] {
		return inputs.map(
			(input) =>
				(input.value =
					input.value !== undefined ? input.value : answers[input.id])
		)
	}

	public load(program: Command) {
		try {
			program
				.command('create <schematic> [name]')
				.option('-n, --name [schematic name]', 'Schematic name to use.')
				.action(async (schematic, ignore, args, command) => {
					switch (toUpperFirst(schematic)) {
						case toUpperFirst(SchematicType.RESOURCE):
							resourceBuilder(args?.name ?? '')
							break
						default:
							console.log('returned')
							return
					}
				})
		} catch (err) {}
	}
}
