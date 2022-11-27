"use strict";

function concat(array) {
  for (let i = 0; i < array.length; i++) {
      console.log(array[i])
  }
}
let array = ["jenni", "jenni", "jenni", "jenni"]
document.querySelector('.list').innerHTML = concat(array);
