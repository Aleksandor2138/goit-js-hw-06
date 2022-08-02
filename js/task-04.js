"use strict";

let counterValue = 0;
const add = document.querySelector("[data-action='increment']");
const remove = document.querySelector("[data-action='decrement']");
const output = document.querySelector("#value");

const addClick = () => {
    counterValue += 1;
    output.textContent = counterValue;
};

const removeClick = () => {
    counterValue -= 1;
    output.textContent = counterValue;
};

add.addEventListener("click", addClick);
remove.addEventListener("click", removeClick);