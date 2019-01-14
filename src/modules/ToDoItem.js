import React from "react"

const mydiv = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '30px 20px 0',
    width: '70%',
    borderBottom: '1px solid #cecece',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '100',
    fontSize: '15px',
    color: '#333333'
}


const ToDoItem = (props) => {
    const text_state = {false: <p>{props.text}</p>, true: <p><s>{props.text}</s></p>}
    return (
        <div style={mydiv}>
            <input type="checkbox"
                   id={props.id}
                   checked={props.completed}
                   onClick={() => props.handleChange(props.id)}
            /> {text_state[props.completed]}
        </div>
    )

}

export default ToDoItem
