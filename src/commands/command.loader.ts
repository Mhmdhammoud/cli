import chalk from 'chalk'
import {Command} from 'commander'
import {ERROR_PREFIX} from '../ui'
import {GenerateCommand} from './generate.command'
import {CreateCommand} from './create.loader'

class CommandLoader {
	public static load(program: Command): void {
		new CreateCommand().load(program)
		// new BuildCommand(new BuildAction()).load(program);
		// new StartCommand(new StartAction()).load(program);
		// new InfoCommand(new InfoAction()).load(program);
		// new UpdateCommand(new UpdateAction()).load(program);
		// new AddCommand(new AddAction()).load(program);
		new GenerateCommand().load(program)

		this.handleInvalidCommand(program)
	}

	private static handleInvalidCommand(program: Command) {
		program.on('command:*', () => {
			console.error(
				`\n${ERROR_PREFIX} Invalid command: ${chalk.red('%s')}`,
				program.args.join(' ')
			)
			console.log(
				`See ${chalk.red('--help')} for a list of available commands.\n`
			)
			process.exit(1)
		})
	}
}

export default CommandLoader
