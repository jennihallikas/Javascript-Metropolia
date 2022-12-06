"use strict";

function calc(num1, num2, choice) {
    if (choice === "addition") {
        return num1 + num2;
    }
    else if (choice === "subtraction") {
        return num1 - num2;
    }
    else if (choice === "multiplication") {
        return num1 * num2;
    }
    else if (choice === "division") {
        return num1 / num2;
    }
    return 0;
}



document.getElementById("start").addEventListener("click", (e) => {
    e.preventDefault();

    const num1calc = parseInt(document.getElementById("num1").value);
    const num2calc = parseInt(document.getElementById("num2").value);
    const choice   = document.getElementById("operation").value;

    const result = calc(num1calc, num2calc, choice);

    document.getElementById("result").innerText = `Result: ${result}`;
})