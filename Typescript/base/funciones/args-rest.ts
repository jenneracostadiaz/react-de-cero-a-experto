(() => {
	const fullName = (firstName: string, ...resArgs: string[]): string => {
		return `${firstName} ${resArgs.join(' ')}`;
	};
	const superman = fullName('Clark', 'Joseph', 'Kent');
	console.log({ superman });
})();
