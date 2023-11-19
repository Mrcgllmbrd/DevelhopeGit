
import { UseGithubUser } from "./UseGithubUser";

export function GithubUser({ username }) {
  
 const {data} = UseGithubUser({username})

  return (
    <div>
      <h3> {data && data.login} </h3>
    </div>
  );
}

