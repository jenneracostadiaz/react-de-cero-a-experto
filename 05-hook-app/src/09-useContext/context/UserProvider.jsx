import { UserContext } from "./UserContext"

const user = {
    id: 123,
    name: 'Jenner Acosta',
    email: 'my@jenner.pe'
}

export const UserProvider = ( { children }) => {
  return (
    <UserContext.Provider value={{hola: 'Mundo', user: user}}>
        { children }
    </UserContext.Provider>
  )
}
