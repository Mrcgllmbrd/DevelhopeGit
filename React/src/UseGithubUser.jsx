import { useEffect, useState } from "react";

export function UseGithubUser({ username }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  async function fetchData() {
    setLoading(true);

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const json = await res.json();
      if(json !== 200) {
        setError (new Error ('user non found'))
      }
      setData(json);

    } catch (error) {
      setError(error);
      setData(null)

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(username);
  }, [username]);

  return {
    data,
    error,
    loading,
  };
}

/* 
Modify the useGithubUser hook to return the function 
to fetch the data of a Github user,
along with the data of the user and the error and loading states.
*/
