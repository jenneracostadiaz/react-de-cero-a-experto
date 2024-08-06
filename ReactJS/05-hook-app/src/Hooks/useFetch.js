import { useEffect, useState } from 'react';

const localCache = {};

export const useFetch = (url) => {
	const [state, setState] = useState({
		data: null,
		isLoading: true,
		hasError: false,
		error: null,
	});

	useEffect(() => {
		getfetch();
	}, [url]);

	const setLoadingState = () => {
		setState({
			data: null,
			isLoading: true,
			hasError: false,
			error: null,
		});
	};

	const getfetch = async () => {
		if (localCache[url]) {
			console.log('Usando cache');
			setState({
				data: localCache[url],
				isLoading: false,
				hasError: false,
				error: null,
			});
			return;
		}

		setLoadingState();

		const resp = await fetch(url);

		//Sleep
		// await new Promise((resolve) => setTimeout(resolve, 1500));

		if (!resp.ok) {
			setState({
				data: null,
				isLoading: false,
				hasError: true,
				error: {
					status: resp.status,
					statusText: !resp.statusText ? 'Ocurrió un error' : resp.statusText,
				},
			});
			return;
		}

		const data = await resp.json();

		setState({
			data,
			isLoading: false,
			hasError: false,
			error: null,
		});

		//Manejo del cache
		localCache[url] = data;
	};

	return {
		data: state.data,
		isLoading: state.isLoading,
		hasError: state.hasError,
	};
};
