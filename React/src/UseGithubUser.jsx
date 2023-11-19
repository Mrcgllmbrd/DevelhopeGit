import { useEffect, useState } from "react";

export function UseGithubUser({ username }) {
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

  return {
   data
  
  }
  
}

/* Extract the logic to fetch a Github user's data 
from the GithubUser component from the third exercise
of Context into a custom hook 
called useGithubUser. */