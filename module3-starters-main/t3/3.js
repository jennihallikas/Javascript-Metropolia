"use strict";
const names = ['John', 'Paul', 'Jones'];

const ul = document.querySelector("#target");

for (let i = 0; i < names.length; i++) {
    let nameList = document.createElement("li");
    nameList.innerText = names[i];

    ul.appendChild(nameList);
}