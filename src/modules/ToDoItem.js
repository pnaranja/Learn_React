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


class ToDoItem extends React.Component {
    constructor(props) {
        super(props)
        this.text_state = {false: <p>{this.props.text}</p>, true: <p><s>{this.props.text}</s></p>}
    }

    render(props) {
        return (
            <div style={mydiv}>
                <input type="checkbox"
                       id={this.props.id}
                       checked={this.props.completed}
                       onClick={() => this.props.handleChange(this.props.id)}
                /> {this.text_state[this.props.completed]}
            </div>
        )
    }
}

export default ToDoItem
