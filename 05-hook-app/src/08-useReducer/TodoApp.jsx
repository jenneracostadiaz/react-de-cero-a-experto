import { useReducer } from "react"
import { todoReducer } from "./todoReducer";

const initailState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del alma',
        done: false,
    }
]

export const TodoApp = () => {

    const [todos, dispatch] = useReducer( todoReducer, initailState);

    return (
        <>
            <div>TodoApp</div>
            <hr />
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </>
    )
}
