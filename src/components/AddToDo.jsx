import {useContext, useRef} from "react";
import TodosContext from './store'

export default function AddToDo(props) {
    let inputRef = useRef();
    let {dispatch} = useContext(TodosContext)
    return (
        <div className="add-todo">
            <input ref={inputRef} type="text"/>
            <button onClick={() => dispatch( {type: "ADD-TODO", payload: inputRef.current.value} )}>Add</button>
        </div>
    )
}
 