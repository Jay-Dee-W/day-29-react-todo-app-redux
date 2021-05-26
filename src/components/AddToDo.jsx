
import { useState } from 'react';
import {useDispatch } from 'react-redux';
import {addTodo} from '../redux/actions/actions'

export default function AddToDo() {
    let [todoName, setTodoName] = useState('')

    let dispatch = useDispatch()
    return (
        <div className="add-todo">
            <input  type="text" name='todoName' value={todoName} onChange={(e) =>  setTodoName(e.target.value)}/>
            <button onClick={() => dispatch(addTodo(todoName)  )}>Add</button>
        </div>
    )
}
 