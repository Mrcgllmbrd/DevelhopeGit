import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome () {

  const [username, setUser] = useState('')
  function handlerUserInpChange(evt) {
    setUser(evt.target.value)
  }

  return (
    <div>
      <input value={username} onInput={handlerUserInpChange}  />
      <Welcome name={username} />
    </div>
  );
}

/* Create an InteractiveWelcome component that renders an input tag and the Welcome component. 
Pass the current content of the input tag to the name prop of the Welcome component.
The input tag should be a controlled component. */