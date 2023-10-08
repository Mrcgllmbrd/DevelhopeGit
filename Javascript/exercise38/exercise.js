const isLogged = true;

function firstPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isLogged
        ? resolve(Math.random())
        : reject(new Error(`Error in the firstPromise`));
      reject(new Error(`Error in the firstPromise`));
    }, 1000);
  });
}
function secondPromise(randomNum) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomNum > 0.5) {
        resolve({ name: "John", age: 24 });
      } else {
        reject(new Error(`Error in the secondPromise`));
      }
    }, 1500);
  });
}
firstPromise()
  .then(secondPromise)
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
