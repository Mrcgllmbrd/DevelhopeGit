const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

for (key in person) {
  console.log(key, person[key]);
}

// Print values of person using Object.keys