export default (e: Record<string, any> | undefined) => {
	return (
		e &&
		e.stack &&
		e.message &&
		typeof e.stack === 'string' &&
		typeof e.message === 'string'
	)
}
