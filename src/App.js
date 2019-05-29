import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todosArray = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  },
  {
    task: "DO THE THING",
    id: 15288170,
    completed: false
  },
  {
    task: "Do the other thing",
    id: 152858,
    completed: false
  },
  {
    task: "Do the other OTHER thing",
    id: 152859,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todosArray,
      todoItem: ''
    };
  }

  updateTodoItem = event => {
    this.setState({todoItem: event.target.value});
  }

  submitTodoItem = event => {
    event.preventDefault();
    console.log(event)
  }

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList todosArray={this.state.todosArray} />
        <TodoForm 
          updateTodoItem={this.updateTodoItem} 
          submitTodoItem={this.submitTodoItem} />
      </div>
    );
  }
}

export default App;
