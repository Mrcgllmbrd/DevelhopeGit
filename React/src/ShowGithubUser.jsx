import { useParams } from "react-router-dom";
import { GithubUserList } from "./GithubUserList";

export function ShowGithubUser() {
  const { username } = useParams();

  return <GithubUserList username={username}/>;
}
