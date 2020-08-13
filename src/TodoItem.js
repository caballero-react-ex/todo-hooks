import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import CheckBox from '@material-ui/core/CheckBox';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


function TodoItem({task, completed}) {
  return (
    <ListItem >
      <CheckBox 
          style ={{color: "green"}} 
          tabIndex={-1}
          checked={completed}
        />
      <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>{task}</ListItemText>
      <ListItemSecondaryAction>
      <IconButton aria-label="Edit">
        <EditIcon />
        </IconButton>
        <IconButton aria-label="Delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default TodoItem;