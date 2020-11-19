import React, {Component} from 'react'

class TodoList extends Component {
    constructor () {
        super()
        this.state = {}
    }

    render() {
        return <p>{this.props.task}</p>
    }
}

export default TodoList