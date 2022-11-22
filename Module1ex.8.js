"use strict";
let start = parseInt(prompt(`Write the start year: `))
let end = parseInt(prompt(`Write the end year: `))
let ul = document.createElement('ul')

for (let i = start; i <= end; i++) {
  if ((start % 4 === 0 && start % 100 !== 0) || start % 400 === 0) {
     let li = document.createElement('li');
       li.innerHTML= start;
       ul.appendChild(li);
      }
      start++;
    }
document.querySelector('.list').appendChild(ul);
