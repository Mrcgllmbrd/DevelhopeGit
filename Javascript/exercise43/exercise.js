const user = {
  id: 1,
  name: "John",
  age: 25,
}; 
function saveToLocalStorage(userObject) {
  const userJson = JSON.stringify(userObject);
  localStorage.setItem("user", userJson);
}

function recoverFromLocalStorage() {
  const userJson = localStorage.getItem("user");
  try {
    if (userJson) {
      const user = JSON.parse(userJson);
      return user;
    }
  } catch (error) {
    console.error("syntax error", error);
  }
  return null
}

saveToLocalStorage(user);
const recoverUser = recoverFromLocalStorage();
console.log(recoverUser);
/* ho sperimentato usando try per gestire specificatamente l'errore, 
ho creato un index per testare l'esercizio nella console di chrome */

