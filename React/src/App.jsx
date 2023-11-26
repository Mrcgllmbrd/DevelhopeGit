import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { GithubUserList } from "./GithubUserList";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <h1>my awesome App</h1>

        <Routes>
          <Route
            path="*"
            element={
              <div>
                <p>user not found</p>
                <Link to="/users"> back to home </Link>
              </div>
            }
          />
          <Route path="/users" element={<GithubUserList />}>
            <Route path=":username" element={<ShowGithubUser />} />
          </Route>
          <Route index element={<p> add a user and select it </p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

/* Add an index route to the GithubUserList route that shows the "Add a user and select it" message. */
