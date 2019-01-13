import React from "react"
import ToDoItem from "./ToDoItem"
import todoData from "./TodoData"

class Main extends React.Component {
    GreenBlue = 'Green or Blue!';
    date = new Date();

    one_style = this.date.getSeconds() <= 30 ? {color: '#0000FF'} : {color: '#008000'}

    constructor() {
        super()
        let ToDoItems =
            todoData.map((item) => <ToDoItem id={item.id} text={item.text} completed={item.completed}
                                             handleChange={this.handleChange.bind(this)}/>)

        this.state = {'todoItems': ToDoItems}

    }

    handleToDoItem(item, id) {
        if (item.props.id === id) {
            return <ToDoItem id={item.props.id} text={item.props.text} completed={!item.props.completed}
                             handleChange={item.props.handleChange}/>
        } else {
            return item
        }

    }

    handleChange(id) {
        this.setState((prevState) => {
            const newToDoItems = prevState.todoItems.map(item => this.handleToDoItem(item, id))
            return {'todoItems': newToDoItems}
        })
        console.log(this.state.todoItems)

    }

    render() {
        return (
            <ul>
                <div>Today is {this.date.toTimeString()}</div>
                <div style={this.one_style}> {`${this.GreenBlue}`} </div>
                {this.state.todoItems}
            </ul>

        )
    }
}

export default Main