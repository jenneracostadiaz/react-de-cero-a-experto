import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'projects@jenner.pe'
    })

    const { username, email } = formState;

    const onInputChannge = ( { target } ) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })

    }

    useEffect( () => {
        // console.log('useEffect called!');
    }, []);
    
    useEffect( () => {
        // console.log('useEffect changed!');
    }, [formState]);
    
    useEffect( () => {
        // console.log('email changed!');
    }, [email]);    

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChannge }
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="projects@jenner.pe"
                name="email"
                value={ email }
                onChange={ onInputChannge }
            />

            {
                (username === 'strider2') && <Message />
            }
        </>
    )
}
