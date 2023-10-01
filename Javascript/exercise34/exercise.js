function printAsyncName(callback, name) {
  let timerCallback = setInterval(callback, 1000);
  let timerName = setInterval(() => console.log(name), 2000);
  setTimeout(() => clearInterval(timerCallback), 1000);
  setTimeout(() => clearInterval(timerName), 2000);
}

function sayHello() {
  console.log("Hello");
}
printAsyncName(sayHello, "people!");
// nota per il tutor: potevo usare setTimeout e risparmiare righe di codice, ma l'esercizio richiedeva setInterval