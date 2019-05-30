import React, { Component } from 'react'

class TodoForm extends Component {
    state = {
        value: ''
    }

    onChange = event => {
        this.setState({ value: event.target.value })
    }

    onSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Add todo..." 
                    value={this.state.value}
                    onChange={this.onChange}
                />
                <input type="submit" value="Submit" className="submit-btn" />
            </form>
        )
    }
}

export default TodoForm
