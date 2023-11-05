export function Welcome({ name }) {
/*  sì, potremmo settare un valore predefinito nella prop di Welcome. 
Quindi: 
export function Welcome({ name = "Marco" }) */
  return <p> Welcome {name} ! </p>;
}
