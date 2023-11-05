import { Welcome } from "./Welcome";


export function App() {
  return (
    <div>
      <Welcome name = "Marco"/> {/* Se non passiamo la prop, nessun nome verrà renderizzato.  */}
    </div>
  )
}