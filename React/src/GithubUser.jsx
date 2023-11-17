import { useEffect, useState } from "react";


export function GithubUser({username}) {
  const [data, setData] = useState(null)


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
      <h3> {data && data.login} </h3>
    </div>
  );
}

/* Starting from the previous exercise, create a new GithubUsers component 
that has a form with a text input and a submit button.
The input will be used for searching a user by providing their username.
Each user will be displayed in a list, where each list item is a GithubUser component.
These components will take username as a prop. */
