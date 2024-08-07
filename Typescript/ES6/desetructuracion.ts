(() => {
	type Avengers = {
		nick: string;
		ironman: string;
		vision: string;
		activo: boolean;
		poder: number;
	};

	const avengers = {
		nick: 'Samuel L. Jackson',
		ironman: 'Robert Downey Jr.',
		vision: 'Paul Bettany',
		activo: true,
		poder: 1500.123123,
	};

	const { poder, vision } = avengers;
	// console.log(poder.toFixed(2), vision.toUpperCase());

	const printAvenger = ({ ironman, ...resto }: Avengers) => {
		console.log(ironman.toUpperCase(), resto.poder.toFixed(2));
	};

	// printAvenger(avengers);

	const avengersArr: string[] = [
		'Cap. America',
		'Ironman',
		'Thor',
		'Hulk',
		'Spiderman',
	];
	const [, ironman] = avengersArr;
	// console.log({ ironman });
})();
