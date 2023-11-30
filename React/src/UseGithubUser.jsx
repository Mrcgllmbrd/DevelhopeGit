import useSWR from "swr";



export function UseGithubUser(username) {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`);
  if (username === null) {
    return {
      data: null,
    };
  }
  console.log(data);

  function handleRefetch() {
    mutate();
  }

  return {
    refetch: handleRefetch,
    data,
    error,
  };
}

/*
Use SWRConfig to set a default value
for the fetcher prop of the useSWR hook.

*/
