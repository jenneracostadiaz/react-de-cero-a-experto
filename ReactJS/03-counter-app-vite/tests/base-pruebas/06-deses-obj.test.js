import { usContext } from '../../src/base-pruebas/06-deses-obj';

describe('Pruebas en 06-deses-obj', () => {
	test('usContext debe retornar un objeto', () => {
		const usnomb = 'Tony';
		const usedad = 22;
		const objectContext = {
			nombreClave: usnomb,
			anios: usedad,
		};
		const myusContext = usContext(usnomb, usedad);
		expect(objectContext).toStrictEqual(myusContext);
	});
});
