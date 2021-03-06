import { ADD_TODO, TOGGLE_TODO, FILTER_TODO } from "./action-types";


export let addTodo = (text) => ({
    type: ADD_TODO,
    payload: text
})

export let toggleTodo = (text) => ({
    type: TOGGLE_TODO,
    payload: text
})

export let filterTodo = (text) => ({
    type: FILTER_TODO,
    payload: text
})