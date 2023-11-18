import { UseLogin } from './UseLogin.jsx'

export function Login() {
  const { data, onLogin } = UseLogin();

  return (
    <div>
      <label> User </label>
      <input
        name="username"
        value={data.username}
        onInput={onLogin}
      />

      <label> Pass </label>
      <input
        name="password"
        value={data.password}
        onInput={onLogin}
      />

      <label>Remember me</label>
      <input
        name="session"
        type="checkbox"
        checked={data.session}
        onChange={onLogin}
      />
    </div>
  );
}





/* 
Create a custom hook that keeps track of the state 
of a controlled form with the username and password inputs,
and returns the current value of the inputs
as well as an event handler to update either input. 
*/
