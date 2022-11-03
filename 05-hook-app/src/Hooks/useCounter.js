import { useState } from "react"

export const useCounter = ( initialValue = 10 ) => {
    const [ counter, setcounter ] = useState( initialValue )
    return {
        counter,
    }
}