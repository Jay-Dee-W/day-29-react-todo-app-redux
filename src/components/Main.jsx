import ToDoList from "./ToDoList";
import AddToDo from "./AddToDo";
import { useState } from "react";
// import {TodosContextProvider} from './store.jsx'

export default function Main({ props }) {

    
    console.log(TodosContextProvider)
    let [currentSelection, setCurrentSelection] = useState('All');
    let updateSelection = (newItem) => setCurrentSelection(newItem);
    return (
        // <TodosContextProvider>
            <div className="container">
                <h2>Get it done! </h2>
                <AddToDo />
                <ToDoList />
                <div className="filter-container">
                    Show:
                <FilterItem updateSelection={updateSelection} text={'All'} isActive ={filter === null} currentSelection={currentSelection} />
                    <FilterItem updateSelection={updateSelection} text={'Active'} isActive={filter} currentSelection={currentSelection} />
                    <FilterItem updateSelection={updateSelection} text={'Completed'} isActive={filter===false} currentSelection={currentSelection} />
                </div>
            </div>
        // </TodosContextProvider>
    )

}

function FilterItem({ text, currentSelection, updateSelection }) {
    return (
        <li onClick={(e) => updateSelection(text)} className={currentSelection === text ? 'active' : ''}>{text}</li>
    )
}
