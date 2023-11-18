import { useState } from "react";

export function useCounter() {
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

  return {
    counter: counter,
    increment: handleCountIncrement,
    reset: handleResetCount,
    decrement: handleCountDecrement,
  };
}

export function HookCounter() {
  const {counter, increment, decrement, reset} = useCounter(0);

  return (
    <div>
      <h2> Counter: {counter} </h2>
      <button onClick={increment}> Increment </button>
      <button onClick={reset}> Reset </button>
      <button onClick={decrement}> Decrement</button>
    </div>
  );
}


/* 
Create a custom hook useCounter that keeps track of the state of a counter, 
and returns the current value of the counter as well as three functions to increment,
decrement and reset the counter. 
*/