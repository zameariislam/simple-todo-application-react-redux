import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED, LOADED } from "./actionTypes";
import initialState from "./initialState";


const nextTodoId = (state) => {
    const maxId = state.reduce((maxId, todo) => Math.max(maxId, todo.id), -1)
    return maxId + 1
}


const todosReducer = (state = initialState, action) => {


    switch (action.type) {


        case LOADED:
            return action.payload

        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload
                }
            ]

        case TOGGLED:

            return state.map(todo => {
                if (todo.id !== action.payload) {
                    return todo
                }
                else {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }

                }
            })

        case COLORSELECTED:
            const { todoId, color } = action.payload

            return state.map((todo) => {
                if (todo.id !== todoId) {
                    return todo
                }
                else {
                    return {
                        ...todo,
                        color: color
                    }
                }
            })

        case DELETED:

            return state.filter(todo => todo.id !== action.payload)

        case ALLCOMPLETED:

            return state.map((todo) => {
                return {
                    ...todo,
                    completed: true
                }
            })

        case CLEARCOMPLETED:

            return state.filter((todo) => !todo.completed)


        default:
            return state;
    }

}

export default todosReducer
