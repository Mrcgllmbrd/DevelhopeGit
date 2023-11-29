import { GithubUsers } from "./GithubUSers";

export function App() {
  return (
    <div>
      <GithubUsers />
    </div>
  );
}

/* Modify the useGithubUser custom hook from the Custom Hooks - 3 exercise
 to use the useSWR hook to fetch the data of a Github user. */