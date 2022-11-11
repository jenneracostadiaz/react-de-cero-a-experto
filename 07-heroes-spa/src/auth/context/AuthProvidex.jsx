import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./AuthReducer"

const initialState = {
    logged: false,
}

export const AuthProvidex = () => {

    const [ authstate, dispatch ] = useReducer( authReducer, initialState)

    return (
        <AuthContext.Provider value={{}}>
            { children }
        </AuthContext.Provider>
    )
}
