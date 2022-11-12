import { authReducer } from "../../../src/auth";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en authReducer', () => { 
    test('debe de retornar el estado por defecto', () => { 
        const state = authReducer({ logged: false }, {})
        expect( state ).toEqual( {logged: false });
     })
    test('debe de (login) llamar el login authenticar y establecer el user', () => { 
        const action = {
            type: types.login,
            payload: {
                name: 'Jenn',
                id: '123'
            }
        }

        const state = authReducer( {logged: false}, action);
        expect( state ).toEqual({
            logged: true,
            user: action.payload
        })
    })
    test('debe de (logout) borrar el name del usuario y logged en false', () => { 
        const state = {
            logged: true,
            user: { id: '123', name:'Jenn'}
        }

        const action = {
            type: types.logout
        }


        const newState = authReducer( state, action );
        // console.log(newState);
        expect( newState ).toEqual({ logged: false })
    })
})