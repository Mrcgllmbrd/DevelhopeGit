import { useParams } from "react-router-dom";


export function ShowGithubUser() {
  const { username } = useParams();

    console.log(username);

  return <div> 
    <h3> user: {username}</h3>
  </div>;
}
