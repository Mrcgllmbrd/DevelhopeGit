import { useState } from "react";

export function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    session: false,
  });

  function handlerInputChange(evt) {
    const name = evt.target.name;
    const value =
      evt.target.type === "text" 
      ? evt.target.value 
      : evt.target.checked;

    setData((data) => {
      const update = {
        ...data,
        [name]: value,
      };
      return update;
    });
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
    </div>
  );
}

/* Create a Login component containing three inputs: 
a username input, a password input and a remember checkbox.
All three inputs should be controlled components. */
