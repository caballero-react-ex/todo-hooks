import React, { useState } from 'react';
import TodoList from './TodoList';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TodoForm from './TodoForm';

function TodoApp() {
  const initialTodos = [
    {id: 1, task: "do groceries", completed: false},
    {id: 2, task: "buy fish", completed: true},
    {id: 3, task: "do sports", completed: false},
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = newTodoText => {
    setTodos([...todos, { id: 4, task: newTodoText, completed: false} ]);
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
        <TodoList todos={todos} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;