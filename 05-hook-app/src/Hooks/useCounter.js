import { useState } from 'react';

export const useCounter = (initialvalue = 10) => {
	const [counter, setcounter] = useState(initialvalue);

	const increment = (value = 1) => {
		setcounter(counter + value);
	};

	const decrement = (value = 1) => {
		if (counter <= 0) return;
		setcounter(counter - value);
	};

	const reset = () => {
		setcounter(initialvalue);
	};

	return {
		counter,
		increment,
		decrement,
		reset,
	};
};
