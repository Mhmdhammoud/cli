import chalk from 'chalk'
import Table from 'cli-table3'
import {MerittCollection} from '../schematics'

class ProgramConfig {
	public static buildDescription(): string {
		return (
			'Modifies a meritt element.\n' +
			`  Schematics available on ${chalk.bold(
				'@merittdev/schematics'
			)} collection:\n` +
			this.buildSchematicsListAsTable()
		)
	}

	public static buildSchematicsListAsTable(): string {
		const leftMargin = '    '
		const tableConfig = {
			head: ['name', 'alias', 'description'],
			chars: {
				left: leftMargin.concat('│'),
				'top-left': leftMargin.concat('┌'),
				'bottom-left': leftMargin.concat('└'),
				mid: '',
				'left-mid': '',
				'mid-mid': '',
				'right-mid': '',
			},
		}
		const table: any = new Table(tableConfig)
		for (const schematic of MerittCollection.getSchematics()) {
			table.push([
				chalk.green(schematic.name),
				chalk.cyan(schematic.alias),
				schematic.description,
			])
		}
		return table.toString()
	}
}
export default ProgramConfig
