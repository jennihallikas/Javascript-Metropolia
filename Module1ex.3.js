"use strict";
let num1 = parseInt(prompt("Enter the first integer number: "))
let num2 = parseInt(prompt("Enter the second integer number: "))
let num3 = parseInt(prompt("Enter the third integer number: "))

let sum = num1 + num2 + num3;
document.querySelector('.sum').innerHTML = `The sum of the numbers is: ${sum}`;

let product = num1 + num2 + num3;
document.querySelector('.product').innerHTML = `The product of the numbers is: ${product}`;

let average = sum / 3;
document.querySelector('.average').innerHTML = `The average of the numbers is: ${average}`;


