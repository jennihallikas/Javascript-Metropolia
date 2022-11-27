'use strict';

let numberList = [];
let number = parseInt(prompt("Enter a number:"))

for (let i = 0; number > 0; i++) {
    number = parseInt(prompt("Enter a number and enter zero if you want to quit:"));
    numberList.push(number);
}

numberList.sort(function (a, b) {
  return a - b;
});

numberList.reverse()
console.log(numberList);
