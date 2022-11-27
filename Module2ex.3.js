'use strict';

let dogList = [];

for (let i = 0; i < 7; i++) {
    let names = prompt("Enter your dogs names:");
    dogList.push(names);
}

var el = document.getElementById('pup');
var ol = document.createElement('ul');
el.appendChild(ol);

dogList.sort();
dogList.reverse();

for (let i = 0; i < dogList.length; ++i) {
  const li = document.createElement('li');
  li.innerText = dogList[i];
    ol.appendChild(li);
    }
