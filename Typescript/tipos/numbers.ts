(() => {
	let avengers: number = 5;
	console.log(avengers);
	const villians: number = 20;
	console.log(villians);

	if (avengers < villians) {
		console.log('We are doomed!');
	} else {
		console.log('We are saved!');
	}

	avengers = Number('55A'); //NaN (Not a Number)
	console.log({ avengers });
})();
