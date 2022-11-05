export const todoReducer = ( initialState = [], action ) => {
    switch (action.type) {
        case '[TODO] Add todo':
            return [ ...initialState, action.payload ]
        case '[TODO] Remove todo':
            return initialState.filter( todo => todo.id !== action.payload );
    
        default:
            return initialState;
    }
}