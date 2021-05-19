import todosReducer from "./reducer/todosReducer"
import {createStore } from 'redux'

const store = createStore(todosReducer)

export default store