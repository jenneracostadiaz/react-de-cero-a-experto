import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 123,
//     name: 'Jenner Acosta',
//     email: 'my@jenner.pe'
// }

export const UserProvider = ( { children }) => {

    const [user, setUser] = useState();


    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}
