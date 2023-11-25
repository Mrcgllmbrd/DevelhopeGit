import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GithubUserList } from "./GithubUserList";
import { ShowGithubUser } from "./ShowGithubUser";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <h1>my awesome App</h1>

        <Routes>
          <Route path="/users" element={<GithubUserList />} />
          <Route path="/users/:username" element={<ShowGithubUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
/*
Create a GithubUserList component that fetching this API url,
 https://api.github.com/users, show a list of links of github usernames.
By clicking on a username, the ShowGithubUser component will be displayed.
Add a Route to the users path that shows the GithubUserList component.
In doing so, remove the /users/:username route from the App component,
and add a new nested route within the /users route.*/
