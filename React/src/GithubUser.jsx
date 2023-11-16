import { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          return setData(json);
        });
    } catch (error) {
      console.log(error);
    }
  }, [username]);

  return (
    <div>
      {data && <h1>{data.name}</h1>}
      {data && <h1>{data.login}</h1>}
      {data && <h1>{data.url}</h1>}
    </div>
  );
}

/* Create a GithubUser component that receives a username prop
and fetches the data of the corresponding Github user from the Github API.
The component should render the user's name, login and avatar. */
