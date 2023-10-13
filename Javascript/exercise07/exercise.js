function printName() {
  helloName = "hello john";
  function inner() {
    setTimeout (() =>{
        console.log(helloName)
    }, 1000);
  }
  return inner;
}


printName()()