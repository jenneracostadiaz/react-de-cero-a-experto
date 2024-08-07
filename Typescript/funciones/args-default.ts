(() => {
	const fullName = (
		firstName: string,
		lastName?: string,
		upper: boolean = false
	): string => {
		if (upper) {
			return `${firstName} ${lastName || 'No last name'}`.toUpperCase();
		} else {
			return `${firstName} ${lastName || 'No last name'}`;
		}
	};

	const name = fullName('Clark', 'Kent', true);
	console.log(name);
})();
