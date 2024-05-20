const { render, screen } = require('@testing-library/react');
const { GifItem } = require('../../src/components/GifItem');

describe('Pruebas en <GifItem />', () => {
	const title = 'Un título';
	const url = 'https://localhost/algo.jpg';

	test('debe de hacer match con el snapshot ', () => {
		const { container } = render(<GifItem title={title} url={url} />);
		expect(container).toMatchSnapshot();
	});

	test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
		render(<GifItem title={title} url={url} />);
		// screen.debug();
		// expect(screen.getByRole('img').src).toBe(url);
		// expect(screen.getByRole('img').alt).toBe(title);
		const { src, alt } = screen.getByRole('img');
		expect(src).toBe(url);
		expect(alt).toBe(title);
	});
});
