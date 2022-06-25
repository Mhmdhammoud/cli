/**
 *
 * @param str
 * @returns formated string
 * @description normalizes input to supported path and file name format.
 * Changes camelCase strings to kebab-case, replaces spaces with dash and keeps underscores.
 */
export default (str: string) => {
	const STRING_DASHERIZE_REGEXP = /\s/g
	const STRING_DECAMELIZE_REGEXP = /([a-z\d])([A-Z])/g
	return str
		.replace(STRING_DECAMELIZE_REGEXP, '$1-$2')
		.toLowerCase()
		.replace(STRING_DASHERIZE_REGEXP, '-')
}
export const toUpperFirst = (_: string | undefined): string | null => {
	if (_) {
		return _.toLowerCase()
			.split(' ')
			.map((val: string) => val.charAt(0).toUpperCase() + val.slice(1))
			.join(' ')
			.split('_')
			.join(' ')
	}
	return null
}
declare global {
	interface String {
		toUpperFirst(): string
	}
}
String.prototype.toUpperFirst = function () {
	return this.toLowerCase()
		.split(' ')
		.map((val: String) => val.charAt(0).toUpperCase() + val.slice(1))
		.join(' ')
		.split('_')
		.join(' ')
}
