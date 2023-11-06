import { Counter } from "./Counter";

export function App() {
  return ( 
      <div> 
    <h1> the count is</h1>
    <Counter initialValue = {100}/>
  </div>
  )

}

/* Extract the h2 tag showing the counter state variable into 
a new component called CounterDisplay
and render it within the Counter component, 
passing it the count state variable as a prop. 
Add a decrement button and a reset button to the Counter component.
The decrement button should decrement the counter by the amount passed as a prop,
and the reset button should reset the counter to the initial value passed as a prop. */
