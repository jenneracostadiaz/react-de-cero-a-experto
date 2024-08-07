(() => {
	type Avengers = {
		nombre: string;
		weapon: string;
	};

	const ironman: Avengers = {
		nombre: 'Ironman',
		weapon: 'Armorsuit',
	};

	const thor: Avengers = {
		nombre: 'Thor',
		weapon: 'Mjolnir',
	};

	const hulk: Avengers = {
		nombre: 'Hulk',
		weapon: 'Strength',
	};

	const avengers: Avengers[] = [ironman, thor, hulk];

	for (const avenger of avengers) {
		console.log(avenger.nombre, avenger.weapon);
	}
})();
