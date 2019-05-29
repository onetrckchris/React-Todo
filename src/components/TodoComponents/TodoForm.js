import React from 'react';

const TodoForm = props => {
    return (
        <form>
            <input onChange={props.updateTodoItem} />
            <button onClick={props.submitTodoItem}>Add Todo</button>
            <button>Clear Completed</button>
        </form>
    )
}

export default TodoForm;