import React, { Component } from 'react'

class TodoCompleted extends Component {
    render() {
        return (
            <button onClick={this.props.deleteCompleted}>
                Clear Completed
            </button>
        )
    }
}

export default TodoCompleted
