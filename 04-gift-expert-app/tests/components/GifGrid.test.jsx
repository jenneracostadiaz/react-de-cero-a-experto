import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => { 
    const category = 'One Punch';
    test('debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoadign: true
        })

        render( <GifGrid category={ category } />)
        // expect( screen.getAllByText( 'Cargando...' ));
        expect( screen.getAllByText( category ));

    })
    test('debe de mistrar itemas cuando se carga las imágenes useFetchGifs', () => { 

        const gifs = [{
            id: 'ABC',
            title: 'Saitama',
            url: 'https://localhost/saitama.jpg'
        },
        {
            id: '123',
            title: 'Goku',
            url: 'https://localhost/goku.jpg'
        },
    ]

        useFetchGifs.mockReturnValue({
            images: [],
            isLoadign: false
        })
        render( <GifGrid category={ category } />);
        // expect( screen.getAllByRole('img').length).toBe(2);
    })
})