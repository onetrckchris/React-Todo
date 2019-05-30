import React from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';

class TodoList extends React.Component {

  render() {
    return this.props.todoList.map(todo => (
      <Todo 
        key={todo.id} 
        todo={todo} 
        markComplete={this.props.markComplete} 
        deleteTodo={this.props.deleteTodo}
      >
        {todo.title}
      </Todo>
    ))
  }
}

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired 
}

export default TodoList;
