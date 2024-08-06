import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {
	const [counter, setCounter] = useState(value);
	const handleAdd = () => setCounter((c) => c + 1);
	const handleSubs = () => setCounter((c) => c - 1);
	const handleReset = () => setCounter((c) => value);

	return (
		<>
			<h1>CounterApp</h1>
			<h2>{counter}</h2>

			<button onClick={handleSubs}>-1</button>
			<button aria-label="btn-reset" onClick={handleReset}>
				Reset
			</button>
			<button onClick={handleAdd}>+1</button>
		</>
	);
};

CounterApp.propTypes = {
	value: PropTypes.number,
};

CounterApp.defaultProps = {
	value: 0,
};
