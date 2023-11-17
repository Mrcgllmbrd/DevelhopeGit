
import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
  const [searchUser, setSearchUser] = useState("");
    const [usernames, setUsernames] = useState([]);


  function handleInpt(evt) {
    setSearchUser(evt.target.value)
    
    
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setUsernames([...usernames, searchUser])

  
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={searchUser} onChange={handleInpt} type="text" />
        <button> search user </button>
      </form>
      <ul>
        {usernames.map((username, index) => (
          <li key={index}>
           <GithubUser username={username} />
          </li>
        ))}
      </ul>
    </div>
  );
}
