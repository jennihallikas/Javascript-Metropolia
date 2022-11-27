"use strict";

"use strict";

function diceRoll(sides) {
  let dices = [];
  let list = document.getElementById('dice');


  while (true) {
    let dice = (Math.floor(Math.random() * sides) + 1);
      if (dice == 6) {
        for (i = 0; i < dices.length; i++) {
        var li = document.createElement('li');
        li.innerText = dices[i];
        list.appendChild(li);
      }
      break;
    }
      else {
      dices.push(dice)
    }
  }
  return;
}
let sides = parseInt(prompt("Enter a number:"));
diceRoll(sides);
