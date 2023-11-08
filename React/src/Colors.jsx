import { Color } from "./Color";

export function Colors({ colors }) {
  return (
    <ul>
      {colors.map((color) => (
        <Color color={color} />
      ))}
    </ul>
  );
}

/* Create a component called Color that receives an object called 'color' as a prop,
 which will have 2 properties, 'id' and 'name,' and returns an 'li' tag 
 that displays the 'name' property. 
 Create a second component called Colors, which takes an array of objects as a prop,
  where the properties are always 'name' and 'id,' and displays an unordered list of Color components.
 */
