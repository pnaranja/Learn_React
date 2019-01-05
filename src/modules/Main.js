import React from "react"
import ToDoItem from "./ToDoItem"
import TodoData from "./TodoData"

const Main = () => {
    const GreenBlue = 'Green or Blue!';
    const date = new Date();

    const one_style = date.getSeconds() <= 30 ? {color: '#0000FF'} : {color: '#008000'}

    const ToDoItems =
        TodoData.map((item) => <ToDoItem id={item.id} text={item.text} completed={item.completed}/>)

    return (
        <ul>
            <div>Today is {date.toTimeString()}</div>
            <div style={one_style}> {`${GreenBlue}`} </div>
            {ToDoItems}
        </ul>
    )

};

export default Main