"use strict";
let number = parseInt(prompt("Enter any number: "))
let i = 2
  if (number%i === 0) {
    document.querySelector('.number').innerHTML = (`${number} is not a prime number`);
  }
  else if (number===2) {
    document.querySelector('.number').innerHTML = (`${number} is a prime number`);
  }
  else if (number===1) {
    document.querySelector('.number').innerHTML = (`${number} is not a prime number`);
  }
  else {
    document.querySelector('.number').innerHTML = (`${number} is a prime number!`);
  }




