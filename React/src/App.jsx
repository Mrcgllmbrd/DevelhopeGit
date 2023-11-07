
import { Login } from "./Login";

function onLogin(username) {
  console.log(`utente loggato: ${username}`)
}


export function App() {
  return (
    <div>
     <Login onLogin={onLogin}/>
    </div>
  );
}


