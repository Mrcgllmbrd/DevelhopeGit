const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

let person2 = person1;
person2 = Object.assign({}, person1);
person2.firstName= 'Simon'

// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);
/* 
SPIEGAZIONE: iL motivo per cui dichiarando una nuova variabile person2 anche person1 
viene modificato è che stiamo puntando verso il primo oggetto, quindi non stiamo creando una copia separata,
 bensì stiamo ridefinendo i valori di person1.
 */