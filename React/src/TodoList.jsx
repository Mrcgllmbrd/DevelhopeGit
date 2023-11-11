import { useState } from "react";
import classes from "./todoList.module.css";

export function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleInpChange(evt) {
    const value = evt.target.value;
    setTodo(value);
  }

  function handleTodoAdd() {
    setTodos((prevTodos) => [...prevTodos, todo]);
    setTodo("");
    console.log(todo);
  }

  function handleResetBtn(evt) {
    evt.preventDefault();
    setTodos([]);
  }

  return (
    <div className={classes.form}>
      <form>
        <input className={classes.inpt} value={todo} onChange={handleInpChange} />
        <button
          className={classes.btn}
          onClick={handleTodoAdd}
          disabled={!todo}
        >
          add Todo
        </button>
        <button className={classes.btn} onClick={handleResetBtn}>
          Reset
        </button>
      </form>

      <ul className={classes.list}>
        {todos.map((myTodo, index) => (
          <li key={index}>{myTodo}</li>
        ))}
      </ul>
    </div>
  );
}

/* 
Style the TodoList component using CSS Modules, either with CSS or SCSS. */
