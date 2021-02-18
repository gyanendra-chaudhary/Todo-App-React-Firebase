import { List, ListItem, ListItemText, Button } from "@material-ui/core";
import React from "react";
import db from "../firebase";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {
  return (
    <List>
      <ListItem>
        <ListItemText>💝{props.todos.todo} 💝 </ListItemText>
        <DeleteForeverIcon
        variant="contained"
        color="secondary"
        onClick={(event) => 
          db.collection("todos").doc(props.todos.id).delete()
        } /
        >
        
      </ListItem>
    </List>
  );
}

export default Todo;
