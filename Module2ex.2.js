'use strict';

const participants = parseInt(prompt(`How many people are attending?`));
let participant_list = [];

for (let i = 0; i < participants; i++) {
    let name = prompt("Enter the names of participants:");
    participant_list.push(name);
}
participant_list.sort();

const el = document.getElementById('list');
const ol = document.createElement('ol');
el.appendChild(ol);

for (let i = 0; i < participant_list.length; ++i) {
  const li = document.createElement('li');
  li.innerText = participant_list[i];
    el.appendChild(li);
    }
