(() => {
	// Tipos
	const batman: string = 'Bruce';
	const superman: string = 'Clark';

	const existe: boolean = false;

	// Tuplas
	const parejaHeroes: string[] = [batman, superman];
	const villano: [string, number, boolean] = ['Lex Lutor', 5, true];

	// Arreglos
	const aliados: string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];

	//Enumeraciones
	enum Fuerza {
		acuaman = 0,
		batman = 1,
		flash = 5,
		superman = 100,
	}
	const fuerzaFlash: Fuerza = Fuerza.flash;
	const fuerzaSuperman: Fuerza = Fuerza.superman;
	const fuerzaBatman: Fuerza = Fuerza.batman;
	const fuerzaAcuaman: Fuerza = Fuerza.acuaman;

	// Retorno de funciones
	function activar_batiseñal(): string {
		return 'activada';
	}

	function pedir_ayuda(): void {
		console.log('Auxilio!!!');
	}

	// Aserciones de Tipo
	const poder: any = '100';
	const largoDelPoder: number = (poder as string).length;
	console.log(largoDelPoder);

	let arr: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
})();
