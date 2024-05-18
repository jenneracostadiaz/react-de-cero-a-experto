import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en <CounterApp />', () => {
	const initialValue = 10;
	test('debe de hacer math con el snapshot', () => {
		const { container } = render(<CounterApp value={initialValue} />);
		expect(container).toMatchSnapshot();
	});

	test('debe de mostrar el valor por defecto de 100', () => {
		render(<CounterApp value={100} />);
		expect(screen.getByText(100)).toBeTruthy();

		// expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(100);
	});

	test('debe de incrementar con el boton +1', () => {
		render(<CounterApp value={initialValue} />);
		fireEvent.click(screen.getByText('+1'));
		expect(screen.getByText(initialValue + 1)).toBeTruthy();
	});

	test('debe de decrementar con el boton -1', () => {
		render(<CounterApp value={initialValue} />);
		fireEvent.click(screen.getByText('-1'));
		expect(screen.getByText(initialValue - 1)).toBeTruthy();
	});

	test('debe de funcionar el boton de reset', () => {
		render(<CounterApp value={initialValue} />);
		fireEvent.click(screen.getByText('+1'));
		fireEvent.click(screen.getByText('+1'));
		fireEvent.click(screen.getByText('+1'));
		// fireEvent.click(screen.getByText('Reset'));
		fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

		expect(screen.getByText(initialValue)).toBeTruthy();
	});
});
