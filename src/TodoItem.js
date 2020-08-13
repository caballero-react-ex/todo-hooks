import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import CheckBox from '@material-ui/core/CheckBox';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


function TodoItem({task, id, completed, removeTodo, toggleTodo}) {

  return (
    <ListItem >
      <CheckBox 
          style ={{color: "green"}} 
          tabIndex={-1}
          onClick={() => toggleTodo(id)}
          // checked={isCompleted ? completed : !completed}
        />
      <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>{task}</ListItemText>
      <ListItemSecondaryAction>
      <IconButton aria-label="Edit">
        <EditIcon />
        </IconButton>
        <IconButton aria-label="Delete" onClick={() => removeTodo(id)} >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default TodoItem;