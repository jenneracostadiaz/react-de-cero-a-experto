import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe('Pruebas en <HomePage />', () => {
    
    test('should debe de mostrar el componente sin el usuario', () => { 
    
        render(
            <UserContext.Provider value={{ user: 1 }}>
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        // expect(preTag.innerHTML).toContain( user.name );
        // expect(preTag.innerHTML).toContain( `${user.id}` );
        // screen.debug();
    });

 });