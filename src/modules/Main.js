import React from "react"
import ToDoItem from "./ToDoItem"

const Main = () => {
    const GreenBlue = 'Green or Blue!';
    const date = new Date();

    const one_style = date.getSeconds() <= 30 ? {color: '#0000FF'} : {color: '#008000'};

    return (
        <ul>
            <div>Today is {date.toTimeString()}</div>
            <div style={one_style}> {`${GreenBlue}`} </div>
            <ToDoItem name="one"/>
            <ToDoItem name="two"/>
            <ToDoItem name="three"/>
        </ul>
    )

};

export default Main