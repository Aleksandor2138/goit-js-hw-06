"use strict";

const sizeControl = document.getElementById("font-size-control");
console.log(sizeControl);
const sizeText = document.getElementById("text");

sizeControl.addEventListener("input", () => {
    sizeText.style.fontSize = `${sizeControl.value}px`;
});