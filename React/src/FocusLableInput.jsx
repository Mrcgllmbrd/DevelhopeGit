import { useEffect, useRef } from "react";

 export function FocusLableInput() {

  const inpRef =  useRef(null)

  useEffect(() => {
    inpRef.current?.focus()
  }, [])
 
  function handleSubmit(evt) {
  evt.preventDefault()
    const formData = new FormData(evt.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      session: formData.get("session") === "on" ? true : false,
    };
    console.log(data)
    console.log(inpRef);
  }
    

  return (
    <form onSubmit={handleSubmit}>
      <label> User </label>
      <input ref={inpRef} name="username" />

      <label> Pass </label>
      <input name="password" type="password" />

      <label>Remember me</label>
      <input name="session" type="checkbox" />

      <button>Login</button>
      <button type="reset"> Reset </button>
    </form>
  );
}

/* Create a FocusableInput component that renders an input tag.
 As soon as the component renders, the input tag should be focused automatically. */