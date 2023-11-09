import { useState } from "react";

export function TodoList() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  function handleInpChange(evt) {
    const value = evt.target.value
    setTodo(value)
  }

  function handleTodoAdd() { 
  setTodos((prevTodos) => [...prevTodos, todo]);
  setTodo('')
  console.log(todo)

  }

  return (
    <ul>
      <input value={todo} onChange={handleInpChange} />
      <button onClick={handleTodoAdd} disabled={!todo} > add Todo</button>
      {todos.map((myTodo, index) => (
       <li key={index} >{myTodo}</li> 
        ))}
    </ul>
  );
}

/* Create a TodoList component that renders a ul tag with a li tag for each item contained in the todos state variable. 
The todos state variable should be an array of strings. 
The TodoList component should also contain an input tag and a button. 
When the button is clicked, the event handler should add the value of the input tag to the todos array.
 */
 
