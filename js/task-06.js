"use strict";

const inputId = document.getElementById("validation-input");
console.log(inputId);
const lengthId = inputId.getAttribute("data-length");
console.log(lengthId);

inputId.addEventListener('blur', () => {
    let textLength = inputId.value.length;
    console.log(textLength);
    if (textLength === Number(lengthId)) {
        inputId.classList.add("valid");
        inputId.classList.remove("invalid");
    } if (textLength !== Number(lengthId)) {
        inputId.classList.add("invalid");
        inputId.classList.remove("valid");
    }
    
});
