"use strict";

let number = parseInt(prompt("How many times would you like to roll the dice?"));
let sum = 0;
for (let i=1; i<=number; i++) {
  let dice = (Math.floor(Math.random()*6)+1);
  sum = sum+dice;
  document.querySelector('.number').innerHTML = `The result of the dice roll ${number} is ${sum}`;
}
