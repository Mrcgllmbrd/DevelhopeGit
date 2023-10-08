const number = 7;

const numPromise = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve(number);
  } else {
    reject(number);
  }
});

numPromise
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
