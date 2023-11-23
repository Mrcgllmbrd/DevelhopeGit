import { App } from "./App";
import { BrowserRouter } from "react-router-dom";

export function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
