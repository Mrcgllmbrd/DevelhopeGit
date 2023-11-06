import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({initialValue, decrementAmount, resetAmount}) {
  const [counter, setCounter] = useState(initialValue)

  function handleCountIncrement() {
    setCounter((c) => c + 1)
  } 

  function handleCountDecrement() {
    setCounter((c) => c - decrementAmount)
  }

  function handleResetCount() {
    setCounter(resetAmount)
  }

  return (
    <div>
      <CounterDisplay myCounter = {counter}/>
      <button onClick={handleCountIncrement}> Increment </button>
      <button onClick={handleResetCount}> Reset </button>
      <button onClick={handleCountDecrement}> Decrement</button>
    </div>
  );
}
