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

  function handleResetBtn(evt) {
    evt.preventDefault()
    setTodos([])
  }

  return (
    <div>
      <form >
        <input value={todo} onChange={handleInpChange} />
      <button onClick={handleTodoAdd} disabled={!todo}>
        add Todo
      </button>
      <button onClick={handleResetBtn}>Reset</button>
      </form>
      
      <ul>
        {todos.map((myTodo, index) => (
          <li key={index}>{myTodo}</li>
        ))}
      </ul>
    </div>
  );
}

/* 
Modify the TodoList component so that the input clears every time a Todo is added to the todos array.
Add a "reset" button that clears the todos array when clicked.
 */
 
