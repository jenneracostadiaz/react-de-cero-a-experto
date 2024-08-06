import { useSelector, useDispatch } from 'react-redux';
import {
	increment,
	decrement,
	incrementByAmount,
} from './store/slices/counter';
import './App.css';

function App() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<>
			<h1>Vite + React</h1>
			<div className="card">
				<p>count is: {count}</p>
				<button type="button" onClick={() => dispatch(increment())}>
					increment
				</button>
				<button type="button" onClick={() => dispatch(decrement())}>
					decrement
				</button>
				<button type="button" onClick={() => dispatch(incrementByAmount(2))}>
					increment by 2
				</button>
			</div>
		</>
	);
}

export default App;
