
import { UseGithubUser } from "./UseGithubUser";

export function GithubUser({ username }) {
  
 const {data, error} = UseGithubUser({username})

  return (
    <div>
      <h3> {data && data.login} </h3>
       {error && <h3>something gone wrong!</h3>}
    </div>
  );
}

