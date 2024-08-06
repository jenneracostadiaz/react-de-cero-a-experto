import { useState } from 'react';

export const CounterApp = () => {
	const [state, setCounter] = useState({
		counter1: 10,
		counter2: 20,
		counter3: 30,
	});

	const { counter1, counter2, counter3 } = state;

	return (
		<>
			<h1>
				Counter1: <span className="mx-2">{counter1}</span>
			</h1>
			<h1>
				Counter2: <span className="mx-2">{counter2}</span>
			</h1>
			<h1>
				Counter3: <span className="mx-2">{counter3}</span>
			</h1>
			<hr />
			<button
				className="btn btn-primary"
				onClick={() => setCounter({ ...state, counter1: counter1 - 1 })}
			>
				-1
			</button>

			<button
				className="btn btn-primary"
				onClick={() => setCounter({ ...state, counter1: counter1 + 1 })}
			>
				+1
			</button>
		</>
	);
};
