import { SWRConfig } from "swr";
import { GithubUsers } from "./GithubUSers";

const fetcher = (url) =>
  fetch(url)
    .then((response) => response.json())
    .then((error) => console.log(error));

export function App() {
  return (
    <SWRConfig value={{ fetcher: fetcher }}>
      <div>
        <GithubUsers />
      </div>
    </SWRConfig>
  );
}

/* Modify the useGithubUser custom hook from the Custom Hooks - 3 exercise
 to use the useSWR hook to fetch the data of a Github user. */
