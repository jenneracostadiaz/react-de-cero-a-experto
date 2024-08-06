describe('pruebas en <DemoComponent />', () => {
	test('Esta prueba no debe de fallar', () => {
		//1. La inicializacion
		const message1 = 'Hola Mundo';
		//2. Estimulo
		const message2 = message1.trim();
		//3.Objervas el comportamiento... esperado
		//   expect(message1).toBe(message2);
		expect(message1).toBe(message2);
	});
});
