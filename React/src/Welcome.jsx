import { Age } from "./Age";

export function Welcome({ name }) {
  return (
    <div>
      <p> Welcome <strong>{name}</strong> ! </p>
      <Age age= {32} />
    </div>
  );
}
