import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en <TodoItem.jsx />', () => {

    const todo = {
        id: 1,
        description: 'Piedra de Alrma',
        done: false
    };
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('Debe de mostrar el todo pendiente de completar', () => { 
        
        render(
            <TodoItem 
                todo={todo}
                onToggleTodo={ onToggleTodoMock }
                onDeleteTodo={onDeleteTodoMock}
            />
        )

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between false')
        const spanElement = screen.getByLabelText('span')
        expect( spanElement.className ).toContain('align-self-center');
        
        screen.debug();

     })
    
     test('Debe de mostrar el todo completado', () => { 

        todo.done = true;
        
        render(
            <TodoItem 
                todo={todo}
                onToggleTodo={ onToggleTodoMock }
                onDeleteTodo={onDeleteTodoMock}
            />
        )

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('text-decoration-line-through');
        
        screen.debug();

     })

     test('should span debe de llamar el ToggleTodo cuando se hae click', () => { 
        todo.done = true;
        
        render(
            <TodoItem 
                todo={todo}
                onToggleTodo={ onToggleTodoMock }
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );

    })
     
    test('should span debe de llamar el deleteTodo', () => { 
        todo.done = true;
        
        render(
            <TodoItem 
                todo={todo}
                onToggleTodo={ onToggleTodoMock }
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const deleteButton = screen.getByRole('button');
        fireEvent.click( deleteButton );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );

    })
 })