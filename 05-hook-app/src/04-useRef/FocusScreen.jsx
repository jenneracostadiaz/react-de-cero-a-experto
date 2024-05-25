import { useRef } from 'react';

export const FocusScreen = () => {
	const inputRef = useRef();

	const onClick = () => {
		inputRef.current.select();
	};

	return (
		<>
			<h1>Docus Screen</h1>
			<hr />

			<input
				ref={inputRef}
				type="text"
				className="form-control"
				placeholder="Su nombre"
			/>

			<button className="btn btn-outline-primary mt-2" onClick={onClick}>
				Focus
			</button>
		</>
	);
};
