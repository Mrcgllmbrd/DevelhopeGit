import { useState } from "react";

export function UseLogin() {
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

  return {
      data,
      onLogin: handlerInputChange,
  };
}

/* 
Create a custom hook that keeps track of the state 
of a controlled form with the username and password inputs,
and returns the current value of the inputs
as well as an event handler to update either input. 
*/
