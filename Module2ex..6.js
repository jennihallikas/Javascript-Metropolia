"use strict";
let dices = [];
  const ul = document.getElementById('ul');

function diceRoll() {
  let dice = (Math.floor(Math.random() * 6) + 1)
}

  while (dices.includes(6) !== true) {
    let rolldice = diceRoll();
    dices.push(rolldice);
    ul.innerHTML += `<li> ${rolldice} </li>`;
    }

  }
}
document.body.appendChild(ul);

