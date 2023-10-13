const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveToLocalStorage(userObject) {
  const userJson = JSON.stringify(userObject);
  localStorage.setItem("user", userJson);
}
saveUserToLocalStorage(user)