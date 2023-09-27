const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};
/* function toJson(obj) {
  const jsonObj = {
  id:obj.id,
  age:obj.age
  };
  return JSON.stringify(jsonObj)
}  */

const json = JSON.stringify(person, ["id","age"])
console.log(json); // Should return: { id: 1, age: 25 }
