import React from 'react';
import uuid from 'uuid';

import TodoList from './components/todo_components/TodoList';
import TodoForm from './components/todo_components/TodoForm';
import TodoCompleted from './components/todo_components/TodoCompleted';

import './app.css';

class App extends React.Component {
  state = {
    todoList: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Get to Diamond in LoL',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Master React',
        completed: false
      }
    ]
  }
  
  markComplete = (id) => {
    this.setState({ todoList: this.state.todoList.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    })})
  }

  deleteTodo = (id) => {
    // These three dots are called the "spread operator" and they basically copy everything 
    // that's passed immediately after it. In this case we'll be copying this.state.todoList
    // and then filtering it to return only the todo items that don't have the same id as the
    // id that we're passed from the TodoList component.
    this.setState({ todoList: [...this.state.todoList.filter(todo => todo.id !== id)] })
  }

  deleteCompleted = () => {
    const newTodoList = this.state.todoList.filter(todo => todo.completed === false);
    console.log(newTodoList)
    this.setState({ todoList: newTodoList });
  }

  addTodo = (value) => {
    const newTodo = {
      id: uuid.v4(),
      title: value,
      completed: false
    }
    this.setState({ todoList: [...this.state.todoList, newTodo] })
  }

  render() {
    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
        <TodoList 
          todoList={this.state.todoList} 
          markComplete={this.markComplete} 
          deleteTodo={this.deleteTodo} 
        />
        <TodoCompleted 
          todoList={this.state.todoList} 
          deleteTodo={this.deleteTodo} 
          deleteCompleted={this.deleteCompleted}
        />
      </div>
    );
  }
}

export default App;
