(() => {
	const fullName = (firstName: string, lastName?: string): string => {
		return `${firstName} ${lastName || 'No last name'}`;
	};

	const name = fullName('Clark', 'Kent');
	console.log(name);
})();
