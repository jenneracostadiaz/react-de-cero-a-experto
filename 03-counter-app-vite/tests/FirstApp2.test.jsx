import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
	const title = 'Hola, soy Jenner';
	const subTitle = 'Soy un subtitulo';

	test('debe hace match con el snapshot', () => {
		const { container } = render(<FirstApp title={title} />);
		expect(container).toMatchSnapshot();
	});

	test('debe de mostrar el mensaje "Hola, soy Jenner"', () => {
		render(<FirstApp title={title} />);
		expect(screen.getByText(title)).toBeTruthy();
	});

	test('debe de mostrar el titulo en un h1', () => {
		render(<FirstApp title={title} />);
		// expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain();
	});

	test('debe de mostrar el subtitulo enviado por props', () => {
		render(<FirstApp title={title} subTitle={subTitle} />);
		expect(screen.getAllByText(subTitle).length).toBe(1);
	});
});
