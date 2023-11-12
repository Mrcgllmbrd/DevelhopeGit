
import { useState } from "react";
import { Clock } from "./Clock";
import { LanguageContext } from "./LanguageContext";


export function App() {
 const [language, setLanguage] = useState('en')

 function handleLanguage(language) {
    console.log(`Changing language to: ${language}`);

  setLanguage(language)
 }



return (
  <div>
    <LanguageContext.Provider value={language}>
      <Clock />
      <select id="lang" onChange={(evt) => handleLanguage(evt.target.value)}>
        <option value='en'>Inglese</option>
        <option value='it'>Italiano</option>
      </select>
    </LanguageContext.Provider>
  </div>
);
}

/* 
Create a LanguageContext and wrap the Clock component within its provider.
Add a select tag to the component in which the Clock component 
is rendered that allows the user to select the language,
 and pass it as a value to the Provider.
Consume the LanguageContext within the Clock component by using the useContext hook,
 and show the "current time" message in the correct language. */
