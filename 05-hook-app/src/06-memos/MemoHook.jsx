import { useMemo, useState } from "react";
import { useCounter } from "../Hooks/useCounter";

const heavySuff = ( interationNumber = 100 )=> {
    for (let i = 0; i < interationNumber; i++) {
        console.log('Ahí vamos...');
    }
    return `${ interationNumber } interacciones realizadas`
}

export const MemoHook = () => {

    const { counter, increment } = useCounter(4000);
    const [show, setShow] = useState(true);

    const memorizedValue = useMemo( () => heavySuff(counter), [counter] );
    
    return (
        <>
            <h1>Counter: <small>{ counter }</small></h1>
            <h4>{ memorizedValue }</h4>
            <hr />
            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >+1</button>
            <button 
                className="btn btn-outline-primary"
                onClick={ () => setShow( !show ) }
             >Show/Hode { JSON.stringify(show) }</button>
        </>
    )
}
