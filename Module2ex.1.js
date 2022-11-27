"use strict";
let numList = [];
let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
let num3 = prompt("Enter third number");
let num4 = prompt("Enter fourth number");
let num5 = prompt("Enter fifth number");

numList.push(num5, num4, num3, num2, num1);

for (let number = 0; number < numList.length; number++) {
    console.log(numList[number])


  document.querySelector('.numList').innerHTML= numList;
}
