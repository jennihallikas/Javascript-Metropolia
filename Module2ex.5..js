"use strict";

let existing_numbers = [];

while (true) {
  let number = parseInt(prompt("Enter any number:"));
  if (existing_numbers.includes(number)) {
    existing_numbers.sort(function (a, b) {
      return a - b;
    }
    console.log(existing_numbers);
    break;
  }
  else {
    existing_numbers.push(number);
  }
}
