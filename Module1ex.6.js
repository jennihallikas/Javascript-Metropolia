let question = confirm("Should I calculate the square root?")
if (question==true) {
  let number = parseInt(prompt("Enter the number:"));

  if (number < 0) {
    document.querySelector('.number').innerHTML =("The square root of negative number is not defined")
  } else {
    let sqrt = Math.sqrt(number);
    document.querySelector('.number').innerHTML = (`The square root of ${number} is ${sqrt}.`);
  }
}
if (question==false) {
  document.querySelector('.number').innerHTML =("The square root is not calculated")
}



