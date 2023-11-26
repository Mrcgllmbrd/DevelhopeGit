import { useParams } from "react-router-dom";


export function ShowGithubUser() {
  const { username } = useParams();

  return <div> 
    <h3> user: {username}</h3>
  </div>;
}
