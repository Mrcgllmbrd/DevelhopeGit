import { Route } from "react-router-dom";
import { Counter } from "./Counter";

export function App() {
  return (
    <div>
      <h1> the count is</h1>
      <Routes>
        <Route
          path="/"
          element={<Counter initialValue={100} incrementAmount={5} />}
        />
      </Routes>
    </div>
  );
}

/* Add a new Route to the /counter path that renders the Counter component from the first state exercise.*/
