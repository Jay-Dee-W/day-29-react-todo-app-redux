import { ADD_TODO, FILTER_TODO, TOGGLE_TODO } from '../actions/action-types'

let initialState = {
    todos: [
        {
            content: "test", completed: false
        },
        {
            content: "test1", completed: false
        },
    ],
    filter: 'All'
}

export default function todoReducer(state = initialState, action) {
    // console.log('from reducer state:', state)
    let todosCopy = JSON.parse(JSON.stringify(state.todos))
    switch (action.type) {
        case ADD_TODO:
            console.log('from reducer addtodo state:', state)
            todosCopy.push({ content: action.payload, completed: false })
            return { ...state, todos: todosCopy }
        case TOGGLE_TODO:
            // console.log( action.payload)
            todosCopy[action.payload].completed = !todosCopy[action.payload].completed
            // console.log(todosCopy)
            return { ...state, todos: todosCopy }
        case FILTER_TODO:
            console.log( action.payload )  
            return {...state, filter: action.payload }
        default:

            return state
    }
}