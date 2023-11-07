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

  function handleReset() {
      setData ({
        username: "",
        password: "",
        session: false,
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

      <button disabled={!data.username || !data.password}
       onClick={handleBtn}>
        Login
      </button>

      <button onClick={handleReset}> Reset </button>
    </div>
  );
}

/* Add a "reset" button to the Login component
 that clears the content of all three inputs when clicked. */