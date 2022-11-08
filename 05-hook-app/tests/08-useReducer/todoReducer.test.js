import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Pruebas en el todoReducer', () => { 

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false,
    }]
    
    test('should debe de regresar el estado inicial', () => { 

        const newState = todoReducer( initialState, {});
        expect( newState ).toBe( initialState );
        
    })

    test('debe de agregar un TODO', () => {
        const action = {
            type: '[TODO] Add todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        }

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 2 )
        expect( newState ).toContain( action.payload )
    })

    test('debe de eliminar un TODO', () => {

        const action = {
            type: '[TODO] Remove todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 0 )
        
    });

    test('debe de realizar el toggle TODO', () => {

        const action = {
            type: '[TODO] Toggle todo',
            payload: 1
        };

        const newState = todoReducer( initialState, action );
        expect( newState[0].done ).toBe( true )

    })

 })