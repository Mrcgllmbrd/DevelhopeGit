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

  function handleRemoveItem(index) {
    const deleteTodo = todos.filter((_, i) => i !== index)
    setTodos(deleteTodo)
    console.log(deleteTodo)
    }
  
  return (
    <div>
      <form>
        <input value={todo} onChange={handleInpChange} />
        <button onClick={handleTodoAdd} disabled={!todo}>
          add Todo
        </button>
        <button onClick={handleResetBtn}>Reset</button>
      </form>

      <ul>
        {todos.map((myTodo, index) => (
          <li key={index}>
            {myTodo}
            <button onClick={() => handleRemoveItem(index)} > remove </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


 
