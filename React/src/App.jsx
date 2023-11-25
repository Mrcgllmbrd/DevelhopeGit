import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <h1>my awesome App</h1>
        <div>
          <Link to="/"> Welcome </Link> |
          <Link to="/:username"> User </Link> |
          <Link to="/counter"> Counter </Link> |
        </div>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/:username" element={<ShowGithubUser />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
/*
Add three Links within the main App component and use them to navigate to all three routes.
*/
