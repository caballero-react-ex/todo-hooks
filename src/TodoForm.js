import React from 'react';
import useInputState from './hooks/useInputState';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

function TodoForm({addTodo}) {
  const [input, updateInput, resetInput] = useInputState("");
  return (
    <Paper>
      <form onSubmit={e => {
        e.preventDefault();
        // with if/else
        // if (input != ''){addTodo(input)} else {alert("please, write something to add to the list")}
        // with ternary operator
        // input != '' ? addTodo(input) : alert("please, write something to add to the list");
    
        if (input === '' || !isNaN(input) ) {
          alert("please, write something to add to the list")
        } else {
        addTodo(input)
        }

        resetInput();
      }}>
      <TextField value={input} onChange={updateInput}></TextField>
      </form>
    </Paper>
  );
}

export default TodoForm;