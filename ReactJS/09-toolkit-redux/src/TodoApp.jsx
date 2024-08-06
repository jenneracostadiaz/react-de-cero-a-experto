import { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './store/apis/todosApi';

export const TodoApp = () => {
	const [todoId, settodoId] = useState(1);

	// const { data: todos = [], isLoading } = useGetTodosQuery();
	const { data: todo, isLoading } = useGetTodoQuery(todoId);

	const nextTodo = () => {
		settodoId(todoId + 1);
	};

	const prevTodo = () => {
		settodoId(todoId - 1);
	};

	return (
		<>
			<h1>Todos - RTK Query</h1>
			<hr />
			<h4>isLoading: {isLoading ? 'true' : 'false'}</h4>
			<pre>{JSON.stringify(todo, null, 2)}</pre>
			{/* <ul>
				{todos?.map(({ id, title, completed }) => (
					<li key={id}>
						<strong>{completed ? '✅' : '❌'}</strong>
						{title}
					</li>
				))}
			</ul> */}
			<button disabled={isLoading} onClick={prevTodo}>
				Prev todo
			</button>
			<button disabled={isLoading} onClick={nextTodo}>
				Next todo
			</button>
		</>
	);
};
