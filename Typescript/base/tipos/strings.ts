(() => {
	const batman: string = 'Batman';
	const linternaVerde: string = 'Linterna Verde';
	const volcanNegro: string = `Héroe: Volcán Negro`;

	console.log(`I'm ${batman}`);

	console.log(batman.toUpperCase());

	console.log(linternaVerde.toLowerCase());

	console.log(volcanNegro[10]?.toUpperCase() || 'No está presente');
})();
