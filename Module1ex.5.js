"use strict";
let year = parseInt(prompt("Enter the year:"));
  if (year % 4 == 0 || year % 100 == 0 && year % 400) {
    document.querySelector('.year').innerHTML = (`The year ${year} is a leap year`);
  }
  else {
    document.querySelector('.year').innerHTML = (`The year ${year} is not a leap year`);
  }
