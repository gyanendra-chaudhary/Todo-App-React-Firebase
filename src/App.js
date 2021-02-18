import "./App.css";
import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";

import Todo from "./components/Todo"
import firebase from 'firebase'
import db from "./firebase"

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // this code fires when the code loads
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      // setTodos(snapshot.docs.map(doc => doc.data().todo))
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))

      // console.log(snapshot.docs.map(doc => doc.data().todo));
    })
    
  }, []);

  const addTodo = (event) => {
    // fired when we click the button
    event.preventDefault(); //preventing from refresh

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })


    setTodos([...todos, input]); //pushing input value to the todos array
    setInput(""); //clearing the input field
  };
  return (
    <div className="App">
      <h1>React TODO -App With Firebase !</h1>
      <hr />
      <div className="container">
        <form>
          <FormControl>
            <InputLabel>🔥Input Todos🔥 </InputLabel>
            <Input
              id="standard-basic"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              label="Standard"
            />
          </FormControl>
          <Button
            disabled={!input}
            type="submit"
            onClick={addTodo}
            variant="contained"
            color="primary"
          >
            Add Todo
          </Button>
        </form>
        <ol type="1">
          {todos.map((todo) => (
            <Todo todos={todo} />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;


