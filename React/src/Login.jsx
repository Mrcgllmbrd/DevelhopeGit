import { useState } from "react";

export function Login({ onLogin }) {
  const [data, setData] = useState({
    username: "",
    password: "",
    session: false,
  });

  function handlerInputChange(evt) {
    evt.preventDefault() 
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
    setData({
      username: "",
      password: "",
      session: false,
    });
  }

  return (
    <form onSubmit={handlerInputChange}>
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

      <button disabled={!data.username || !data.password} onClick={handleBtn}>
        Login
      </button>

      <button onClick={handleReset}> Reset </button>
    </form>
  );
}

/*Use the form element to handle the form's submission,
 and attach the handleLogin event handler to the onSubmit event of the form element.
 How do you prevent the default behavior of the form element?*/

 //RISPOSTA: usando il metodo preventDefault()
