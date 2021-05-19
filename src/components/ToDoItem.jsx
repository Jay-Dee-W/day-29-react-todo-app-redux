export default function ToDoItem(props) {

    return (
        <div className={props.completed ? "todo-item completed" : "todo-item"}>
            <input type="checkbox" checked={props.completed}/>
            <p className="content">{props.content}</p>
        </div>
    )

}