"use strict";
const numList = ["1", "2", "3", "4"];
function even(numList) {
  const evenNum = [];
  for (let i = 0; i < numList.length; i++) {
    if (numList[i] == 0) {
      evenNum.push(numList[i]);
    }
  }
  return evenNum;
}
console.log(`The original list is ${numList}`);
console.log(`The list with even numbers is ${even(numList)}`)
