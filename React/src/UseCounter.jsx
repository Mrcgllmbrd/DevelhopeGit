import { useState } from "react";

export function UseCounter() {
  const [counter, setCounter] = useState(0);

  function handleCountIncrement() {
    setCounter((c) => c + 1);
  }

  function handleCountDecrement() {
    setCounter((c) => c - 1);
  }

  function handleResetCount() {
    setCounter(0);
  }

  return  {
    counter,
    increment: handleCountIncrement,
    decrement: handleCountDecrement,
    reset: handleResetCount,
  }

  
}