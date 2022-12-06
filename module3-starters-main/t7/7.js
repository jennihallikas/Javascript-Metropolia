"use strict";
const img = document.getElementById("target");
const hover = document.getElementById("trigger");

hover.addEventListener('mouseenter', () => {
    img.src = 'img/picB.jpg';
});

hover.addEventListener('mouseleave', () => {
    img.src = 'img/picA.jpg';
});