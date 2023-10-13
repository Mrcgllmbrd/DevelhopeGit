async function getTodo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
      throw new Error(`error in url: ${response.status} ${response.statusText}`);
    } else {
      const todoList = await response.json();
      return todoList;
    }
  } catch (error) {
    console.log('error here!', error)
  }
}
getTodo()
.then((todo) => console.log(todo))
