import React from 'react';
import TodoItem from './TodoItem';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';


function TodoList({todos, removeTodo, toggleTodo, editTodo}) {
  return (
    <Paper>
      <List style={{padding: "0"}}>
        {todos.map(todo => (
          <>
          <TodoItem 
            key={todo.id}
            id={todo.id}
            task={todo.task} 
            completed={todo.completed} 
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
          <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;