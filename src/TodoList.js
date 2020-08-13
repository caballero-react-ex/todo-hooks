import React from 'react';
import TodoItem from './TodoItem';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';


function TodoList({todos, removeTodo, toggleTodo, editTodo}) {
  return (
    <Paper>
      <List style={{padding: "0"}}>
        {todos.map((todo, i) => (
          <>
          <TodoItem 
            {...todo} // pass each individual property of todo (id, task, completed)
            key={todo.id}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
          {i < todos.length -1 && <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;