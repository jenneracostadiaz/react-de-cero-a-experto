(() => {
	const fullName = (firstName: string, lastName: string): string => {
		return `${firstName} ${lastName}`;
	};

	const name = fullName('Clark', 'Kent');
	console.log(name);
})();
