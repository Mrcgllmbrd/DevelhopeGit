import { useEffect, useRef } from "react";
 export function FocusLableInput() {

  const mountRef = useRef(false)
 

  useEffect(() => {
 if(!mountRef.current) {
    mountRef.current = true
    console.log(`component mounted for the first time`)
  } else {
    console.log(`component mounted again`)
  }


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
  }
    

  return (
    <form onSubmit={handleSubmit}>
      <label> User </label>
      <input name="username" />

      <label> Pass </label>
      <input name="password" type="password" />

      <label>Remember me</label>
      <input name="session" type="checkbox" />

      <button>Login</button>
      <button type="reset"> Reset </button>
    </form>
  );
}

/* Using StrictMode, create a component with an effect
that prints a message only when the component is mounted the first time. 
Use a ref to keep track of whether the component is mounted or not. */