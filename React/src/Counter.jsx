import {useEffect, useRef, useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  const directionRef = useRef('')
  const prevDirectionRef = useRef(''); 


  function handleIncrement() {
    setCount((c) => c + 1)
    directionRef.current = 'up'
  }

  function handleDecrement() {
    setCount((c) => c - 1);
    directionRef.current = "down";
  }


   useEffect(() => {
     if (directionRef.current !== prevDirectionRef.current) {
       console.log(directionRef.current);
       prevDirectionRef.current = directionRef.current;
     }
   }, [count]);


  return (
    <div>
      <button onClick={handleDecrement}>
        Decrement
      </button>
      <button onClick={handleIncrement}>
        Increment
      </button>
      <p> {count} </p>
    </div>
  );
}

/* Modify the Counter component so that whenever the value of the counter changes,
 the value of a ref is updated to contain the direction of the change 
 (i.e. "up" or "down") relative to the initialValue prop.
 Print the value of the ref to the console only when it's different 
 from the previous value.. */
