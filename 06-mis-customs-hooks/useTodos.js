import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

// const initialState = [];

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
    const [todos, dispatch] = useReducer( todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add todo',
            payload: todo
        }
        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        // console.log({id});
        dispatch({
            type: '[TODO] Remove todo',
            payload: id
        });
    }

    const handleToggleTodo = ( id ) => {
        // console.log({id});
        dispatch({
            type: '[TODO] Toggle todo',
            payload: id
        });
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}
