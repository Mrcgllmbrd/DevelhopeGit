import { AlertClock } from "./AlertClock";

export function App() {
  const HandlerTime = () => {
    const time = new Date();
    alert(`current time is ${time.toLocaleTimeString()}`);
  };

  return (
    <div>
      <AlertClock onButtonClick={HandlerTime} />
    </div>
  );
}
