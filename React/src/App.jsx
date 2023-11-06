import { Counter } from "./Counter";

export function App() {
  return (
    <div>
      <Counter initialValue={100} incrementAmount={5} />
    </div>
  );
}

/* Add a side effect to the Counter component from State - 1 exercise that prints 
the current value of the counter inside of the console.
 */
