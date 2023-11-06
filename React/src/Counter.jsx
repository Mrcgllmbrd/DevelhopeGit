import { useState } from "react";

export function Counter({initialValue}) {
  const [counter, setCounter] = useState(initialValue)

  function handleCountIncrement() {
    setCounter(counter + 1);
  } 

  return (
    <div>
      <h2> the count is: {counter} </h2>
      <button onClick={handleCountIncrement}> Increment </button>
    </div>
  );
}
