(() => {
	interface Hero {
		name: string;
		age?: number;
		powers: number[];
		getName?: () => string;
	}

	let flash: Hero = {
		name: 'Barry Allen',
		age: 24,
		powers: [1, 2],
	};

	// console.log(flash);
})();
