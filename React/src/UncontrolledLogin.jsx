export function UncontrolledLogin() {
  
  function handleSubmit(evt) {
    evt.preventDefault();
  
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

/* Attempt to access the values of the form by using the FormData API. 
What are the advantages? What are the disadvantages? */

// RISPOSTA: Lo svantaggio è il dover usare un operatore condizionale
// per ottenere il false sull'input checked, il vantaggio è avere una 
// sintassi più ordinata