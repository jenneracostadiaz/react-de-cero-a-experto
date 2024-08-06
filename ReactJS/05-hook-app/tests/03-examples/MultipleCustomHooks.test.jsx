import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples"
import { useCounter } from "../../src/Hooks/useCounter";
import { useFetch } from "../../src/Hooks/useFetch"

jest.mock('../../src/Hooks/useFetch');
jest.mock('../../src/Hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => { 
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue( {
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('should debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue( {
            data: null,
            isLoading: true,
            hasError: null
        })
        
        render(( <MultipleCustomHooks />));

        expect( screen.getByText('Loading...'));
        expect( screen.getByText('BrakingBad Quotes'));

        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect( nextButton.disabled ).toBeTruthy();
        
     });

     test('Debe de mostrar un Quote', () => { 
        useFetch.mockReturnValue( {
            data: [{ author: 'Jenner', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        })

        render(( <MultipleCustomHooks />));

        expect( screen.getByText('Jenner')).toBeTruthy()
        expect( screen.getByText('Hola Mundo')).toBeTruthy()

        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect( nextButton.disabled ).toBeFalsy();
        // screen.debug();
    });

    test('should debe de llamar la funcion de incrementar', () => { 
        
        useFetch.mockReturnValue( {
            data: [{ author: 'Jenner', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });
        

        render(( <MultipleCustomHooks />));
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();

    });
 })