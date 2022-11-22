"use strict";
let name = prompt("What's your name?");

let number = (Math.floor(Math.random() * 4) + 1);
console.log(number);
  if (number == 1) {
    document.querySelector('.number').innerHTML= (`${name} + ", you are a Gryffindor`);
  }
  else if (number == 2) {
    document.querySelector('.number').innerHTML = (`${name} + ", you are a Slytherin`);
  }
  else if (number == 3) {
    document.querySelector('.number').innerHTML= (`${name} + ', you are Hufflepuff`);
  }
  else if (number == 4) {
    document.querySelector('.number').innerHTML = (`${name} you are Ravenclaw`);
  }

