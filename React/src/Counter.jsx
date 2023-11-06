import { useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({initialValue, incrementAmount, decrementAmount, resetAmount}) {
  const [counter, setCounter] = useState(initialValue)

  function handleCountIncrement() {
    setCounter((c) => c + incrementAmount)
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
