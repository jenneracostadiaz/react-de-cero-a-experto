import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setinputValue] = useState('');

	const onInputChange = ({ target }) => {
		setinputValue(target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		if (inputValue.trim().length <= 1) return;

		// setCategories((categories) => [inputValue, ...categories]);
		setinputValue('');
		onNewCategory(inputValue.trim());
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="Ingrese una categoría"
				value={inputValue}
				onChange={onInputChange}
			/>
		</form>
	);
};
