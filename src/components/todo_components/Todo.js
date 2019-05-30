import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Todo.css';

class Todo extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title} = this.props.todo;
        return (
            <div className="todo" >
                <input 
                    className="todo-checkbox" 
                    type="checkbox" 
                    onChange={this.props.markComplete.bind(this, id)} 
                />
                <p style={this.getStyle()}>{title}</p>
                <div className="delete-btn" onClick={this.props.deleteTodo.bind(this, id)}>X</div>
            </div>
        )
    }
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired 
}

export default Todo
