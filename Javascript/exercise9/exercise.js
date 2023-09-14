const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

let keys = Object.keys(person) 
console.log(keys) 

let values = Object.values(person)
console.log(values)

//oppure object.entries per entrambi 
let KeysAndValue = Object.entries(person)
console.log(KeysAndValue)

