(() => {
	abstract class Mutante {
		constructor(public name: string, public realName: string) {}
	}

	class Xmen extends Mutante {
		salvarMundo() {
			console.log('Salvando el mundo');
		}
	}
	class Villan extends Mutante {
		conquistarMundo() {
			console.log('Conquistando el mundo');
		}
	}

	const wolverine = new Xmen('Wolverine', 'Logan');
	const magneto = new Villan('Magneto', 'Erik');
	// console.log(wolverine.salvarMundo());
	// console.log(magneto.conquistarMundo());

	const printName = (character: Mutante) => {
		console.log(character.name);
	};

	// printName(magneto);
})();
