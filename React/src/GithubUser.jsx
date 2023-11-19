
import { UseGithubUser } from "./UseGithubUser";

export function GithubUser({ username }) {
  
 const {data, loading, error} = UseGithubUser({username})

  return (
    <div>
      {data && <h1>{data.login}</h1>}
      {loading && <h1>loading...</h1>}
      {error && <h1>user not found</h1>}
    </div>
  );
}

