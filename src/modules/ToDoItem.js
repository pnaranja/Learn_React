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
        this.state = {"completed": this.props.completed}
        this.text_state = {false: <p>{this.props.text}</p>, true: <p><s>{this.props.text}</s></p>}
    }

    DoneNotDone() {
        // this.setState({"completed": !this.state.completed})
        this.setState((prevState) => {
            return {"completed": !prevState.completed}
        })
    }

    render(props) {
        return (
            <div style={mydiv}>
                <input type="checkbox"
                       id={this.props.id}
                       checked={this.state.completed}
                       onClick={() => this.DoneNotDone()}
                /> {this.text_state[this.state.completed]}
            </div>
        )
    }
}

export default ToDoItem
