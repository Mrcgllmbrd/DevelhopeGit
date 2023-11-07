export function UncontrolledLogin() {
  
  function handleSubmit(evt) {
    evt.preventDefault();
    const username = evt.target.elements.namedItem("username").value;
    const password = evt.target.elements.namedItem("password").value;
    const session = evt.target.elements.namedItem("session").checked;

    const data = {
      username,
      password,
      session
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

/* Implement an UncontrolledLogin component 
that implements all the operations of the Login component,
but does so using uncontrolled components. 
Attempt to access the values of the form using the DOM API 
by reading the event.target of the onSubmit event handler. */
