function sumUntil(maxValue) {
  // ...
  let number=0;
  for (i = 0; i <= maxValue; i++) {
    number += i;
  }
  return number;
}

console.log(sumUntil(5));
