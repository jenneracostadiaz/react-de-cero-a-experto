(() => {
	class Apocalipsis {
		static instace: Apocalipsis;
		private constructor(public name: string) {}

		static callApocalipsis() {
			if (!Apocalipsis.instace) {
				Apocalipsis.instace = new Apocalipsis('Soy Apocalipsis... el único');
			}

			return Apocalipsis.instace;
		}

		changeName(newName: string): void {
			this.name = newName;
		}
	}

	const apocalipsis = Apocalipsis.callApocalipsis();
	console.log(apocalipsis);
	apocalipsis.changeName('Hola');
	const apocalipsis2 = Apocalipsis.callApocalipsis();
	const apocalipsis3 = Apocalipsis.callApocalipsis();
	console.log(apocalipsis2, apocalipsis3);
})();
