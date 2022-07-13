"use strict";
const nameIn = document.querySelector("#name-input");
const nameOut = document.querySelector("#name-output");

const addName = (name) => {
    nameOut.textContent = name.currentTarget.value;
};

nameIn.addEventListener("input", addName);