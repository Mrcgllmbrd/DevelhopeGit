import { UseCounter } from "./UseCounter";

export function Counter() {
  const { counter, increment, decrement, reset } = UseCounter(0);

  return ( 
    <div>
      <h2> {counter} </h2>
      <button onClick={increment}> + </button>
      <button onClick={reset}> reset </button>
      <button onClick={decrement}> - </button>
    </div>
  );
}

/* 
Create a custom hook useCounter that keeps track of the state of a counter,
and returns the current value of the counter as well as three 
functions to increment,
decrement and reset the counter.
*/
