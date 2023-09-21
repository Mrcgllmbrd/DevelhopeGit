class Person {
  // ...
  firstName;
  lastName;
  age;

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  
  get firstName() {
    return this._firstName;
  }
  set firstName(newFirstName) {
    this._firstName = newFirstName;
  }

  
  get lastName() {
    return this._lastName;
  }
  set lastName(newLastName) {
    this._lastName = newLastName;
  }

  
  get age() {
    return this._age;
  }
  set age(newAge) {
    this._age = newAge;
  }


  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);

