import { useState } from "react";

export function Login({ onLogin }) {
  const [data, setData] = useState({
    username: "",
    password: "",
    session: false,
  });

  function handlerInputChange(evt) {
    const name = evt.target.name;
    const value =
      evt.target.type === "text" ? evt.target.value : evt.target.checked;

    setData((data) => {
      const update = {
        ...data,
        [name]: value,
      };
      return update;
    });
  }

  function handleBtn() {
    onLogin(data.username);
  }

  return (
    <div>
      <label> User </label>
      <input
        name="username"
        value={data.username}
        onInput={handlerInputChange}
      />

      <label> Pass </label>
      <input
        name="password"
        value={data.password}
        onInput={handlerInputChange}
      />

      <label>Remember me</label>
      <input
        name="session"
        type="checkbox"
        checked={data.session}
        onChange={handlerInputChange}
      />

      <button disabled={!data.username || !data.password}
       onClick={handleBtn}>
        Login
      </button>
    </div>
  );
}

/* Add a "login" button to the Login component. 
This button should be disabled as long as the username and password inputs are empty.
When clicked, the event handler attached to the button 
should call an onLogin function passed as a prop
to the Login component, passing it the state, that will print the state value. */
