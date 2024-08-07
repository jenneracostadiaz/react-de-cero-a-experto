(() => {
	let flash: {
		name: string;
		age?: number;
		powers: string[];
		getName?: () => string;
	} = {
		name: 'Barry Allen',
		age: 24,
		powers: ['Super speed', 'Super reflexes'],
	};

	flash = {
		name: 'Clark Kent',
		// age: 60,
		powers: ['Super strength', 'Fly'],
		getName() {
			return this.name;
		},
	};

	console.log(flash.name);
})();
