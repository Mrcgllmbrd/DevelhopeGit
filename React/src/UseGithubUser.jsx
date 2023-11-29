import useSWR from "swr";

const fetcher = (url) =>
  fetch(url)
    .then((response) => response.json())
    .then((error) => console.log(error));

export function UseGithubUser({ username }) {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );
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
Modify the useGithubUser hook so that it returns
a function to manually refetch the data when invoked.
*/
