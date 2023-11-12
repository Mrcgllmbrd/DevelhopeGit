import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";

export function Clock() {
  const [date, setDate] = useState(new Date());
  const language = useContext(LanguageContext)
  console.log(language)
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

    const translatedTime =
      language === "en"
        ? `It is ${date.toLocaleTimeString()} time o clock!`
        : `Sono le ${date.toLocaleTimeString()}`;


  return (
    <div className="clock">
      <h2>{translatedTime}</h2>
    </div>
  );
}
