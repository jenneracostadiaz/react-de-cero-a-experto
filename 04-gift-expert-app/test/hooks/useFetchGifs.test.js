import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {
	test('debe de retornar el estado inicial', () => {
		const { result } = renderHook(() => useFetchGifs('One Punch'));
		const { images, isLoading } = result.current;
		expect(images.length).toBe(0);
		expect(isLoading).toBe(true);
	});

	test('debe de retornar un arreglo de imágenes y el isLoading en false', async () => {
		const { result, waitForNextUpdate } = renderHook(() =>
			useFetchGifs('One Punch')
		);
		await waitFor(
			() => expect(result.current.images.length).toBeGreaterThan(0),
			{ timeout: 3000 }
		);

		const { images, isLoading } = result.current;

		expect(images.length).toBeGreaterThan(0);
		expect(isLoading).toBe(false);
	});
});
