import { useContext } from "react";
import ToDoItem from "./ToDoItem";
import TodosContext from './store'

export default function ToDoList({props}) {

    let {todoState} = useContext(TodosContext)
    console.log('todoState', todoState )
    return (
        <div className="list">
            <ul className="todo-items">
                {todoState.todos.map( todo => <ToDoItem key={todoState.id} content={todo.content} completed={todo.completed}/>)}
            </ul>
        </div>

    )
}
 