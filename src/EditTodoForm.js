import React from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';

function EditTodoForm({task, id, editTodo, toggleEditForm}) {
  const [input, updateInput, resetInput] = useInputState(task);

  return (
    <form  
      onSubmit={e => {
        e.preventDefault();
        if (input === '' || !isNaN(input) ) {
          alert("please, write something to add to the list")
        } else {
        editTodo(id, input)
        }
        resetInput();
        toggleEditForm();
      }}
    >
      <TextField 
        margin="normal" 
        value={input} 
        onChange={updateInput}
        fullWidth
      />
    </form>
   
  )
}

export default EditTodoForm;