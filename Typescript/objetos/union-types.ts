(() => {
	type Hero = {
		name: string;
		age?: number;
		powers: string[];
		getName?: () => string;
	};

	let myCustomVariable: string | number | Hero = 'Diana Prince';
	console.log(typeof myCustomVariable);

	myCustomVariable = 100;
	console.log(typeof myCustomVariable);

	myCustomVariable = {
		name: 'Bruce Wayne',
		age: 45,
		powers: ['Rich', 'Intelligent'],
	};
	console.log(typeof myCustomVariable);
})();
