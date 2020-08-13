import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TodoForm from './TodoForm';

function TodoApp() {
  const initialTodos = [];
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = newTodoText => {
    setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false} ]);
  }
  const removeTodo = todoId => {
    const updateTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updateTodos);
  }

  const toggleTodo = todoId => {
    const updateTodos = todos.map(todo => 
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo);
    setTodos(updateTodos);
  }

  return (
    <Paper 
    style={{
      padding: 0,
      margin: 0,
      height: "100vh",
      backgroundColor: "#fafafa",
    }}
    elevation={0}
    >
      <AppBar color='primary' position="static" style={{ height:"64px" }}>
        <Toolbar>
          <Typography color="inherit">TODO WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{marginTop: "1rem"}}>
        <Grid item xs={11} md={8} lg={4} >
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;