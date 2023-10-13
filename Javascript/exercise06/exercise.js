function printName() {
    helloName = 'hello john'
    function inner () {
        return helloName
    }
    return inner
} 
console.log(printName()())