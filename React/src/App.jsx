import { Hello } from "./Hello";
import { Message } from "./Message";

export function App() {
  return (
    <div>
      <Hello />
      <Message /> {/*  Sì possiamo renderizzare Message direttamente in App component */}
      <Hello /> {/* Possiamo renderizzare il componente tutte le volte che vogliamo, in pagina vedremo due volte il componente  */}
    </div>
  )
}