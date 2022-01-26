import React from "react";

const ToDoList = (props) =>{

    

    return(
        <>
        <div className="todo_list">
            <button className="click" onClick={ () =>{
                props.onSelect(props.id);
            }}>-</button>
        <li>{props.text}</li>
        </div>
        </>

    );
}
export default ToDoList;