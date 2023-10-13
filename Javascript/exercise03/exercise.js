/* const sum = function (a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
}

const multiply = function (a, b) {
  return a * b;
}

const divide = function (a, b) {
  return a / b;
}
 */

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const resultSum = sum(2, 4);
const resultSecondSum = sum(5, 2);
const resultMultiply = multiply(resultSum, resultSecondSum);
const resultSubtract = subtract(resultMultiply, 2);
const finalResult = divide(resultSubtract, 5);

const log = (finalResult) => console.log(finalResult);

log(finalResult)
