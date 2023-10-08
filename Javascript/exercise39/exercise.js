
const isLogged = true;

function firstPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isLogged) {
        let randomNum = Math.random();
        resolve(randomNum);
      } else {
         const error = new Error("Error in the firstPromise!"); // personalizziamo l'errore creando un oggetto
         error.details = "User is not logged!"; // aggiungiamo dettagli all'oggetto
         reject(error);
      }
    }, 1000);
  });
}
function secondPromise(randomNum) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomNum > 0.9) {
        resolve({ name: "John", age: 24 });
      } else {
       const error = new Error("Error in the secondPromise!") // personalizziamo l'errore creando un oggetto
        error.details = ('number is lower then 0.5!') // aggiungiamo dettagli all'oggetto
        reject(error)
      }
    }, 1500);
  });
}
firstPromise()
  .then(secondPromise)
  .then((result) => console.log(result))
  .catch((err) => {
  console.error(`Error message: ${err.message}`)
  console.error(`Cause: ${err.details}`);
  })
  .finally(() => console.log('no care about errors :)'))
