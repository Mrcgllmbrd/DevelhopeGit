import { useState } from "react";

export function Counter({initialValue, incrementAmount}) {
  const [counter, setCounter] = useState(initialValue)

  function handleCountIncrement() {
    setCounter(counter + incrementAmount);
  } 

  return (
    <div>
      <h2> the count is: {counter} </h2>
      <button onClick={handleCountIncrement}> Increment </button>
    </div>
  );
}
