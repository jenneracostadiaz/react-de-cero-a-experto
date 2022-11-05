export const TodoItem = ( { todo, onDeleteTodo, onToggleTodo } ) => {
    return (
        <li className={`list-group-item d-flex justify-content-between ${ todo.done && 'list-group-item-action list-group-item-success'}`}>
            <span 
                className={`align-self-center ${ todo.done && 'text-decoration-line-through'}`}
                onClick={ () => onToggleTodo ( todo.id ) }
            >{ todo.description }</span>
            <button className="btn btn-danger" onClick={ () => onDeleteTodo( todo.id ) }>Borrar</button>
        </li>
    )
}