
import { Colors } from "./Colors";

export function App() {
  return (
    <div>
      <Colors
        colors={[
          { id: 4, name: "red" },
          { id: 1, name: "yellow" },
          { id: 2, name: "orange" },
          { id: 3, name: "blu" },
        ]}
      />
    </div>
  );
}
