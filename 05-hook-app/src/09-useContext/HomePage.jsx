import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {

  const { user } = useContext( UserContext );

    return (
      <>
          <h1>HomePage</h1>
          <hr />
          <h2>Hola, <small>{ user?.name }</small></h2>
      </>
    )
  }
  