import { Age } from "./Age";

export function Welcome({name, age}) {
  return (
    <div>
      <p>
        Welcome <strong>{name}</strong> !
      </p>
      {age > 18 && <Age age={age} /> }
      {age && <Age age={age} />}
      {age < 65 && age > 18 && <Age age={age} /> }
      {age > 18 && name === "John" &&  <Age age={age} />}
      <Age age={age} />
    </div>
  );
}

/* Modify the Welcome component so that the Age component is rendered 5 times. 
For every time use conditional rendering with one of the following conditions: 
- The Age component is rendered only if the age prop is greater than 18.
- The Age component is rendered only if the age prop is present. 
- The Age component is rendered only if the age prop is greater than 18 and less than 65. 
- The Age component is rendered only if the age prop is greater than 18 and the name prop is equal to "John". */
