import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/:username" element={<ShowGithubUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
/* 
Add a new Route to the users/:username path
that renders a ShowGithubUser 
component that receives the username as a path parameter
and renders the GithubUser
component from the first Data Fetching
with fetch and useEffect exercise by passing it the received username. 
*/
