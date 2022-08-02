"use strict";
const inputText = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const deleteBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let sizes = 20;

const createBoxes = () => {
  const amount = inputText.value; ;
  if (amount <= 0 || amount % 1) {
    return alert(`Bведите, пожалуйста, целое число больше или равное 1!!!`);
  }
  for (let i = 1; i <= amount; i += 1) {
    sizes += 10;
    const squares = document.createElement("div");
    squares.classList.add("item");
    squares.style.cssText = `
      width: ${sizes}px;
      height: ${sizes}px;
      background-color: ${getRandomHexColor()};
    `;
    boxes.append(squares);
  }
  inputText.value = '';  
}
const destroyBoxes = () => {
  const allsquares = document.querySelectorAll(".item");
  for (let allsquare of allsquares) {
    boxes.removeChild(allsquare);
  }
  sizes = 20;
  inputText.value = "";
};
createBtn.addEventListener('click', createBoxes);
deleteBtn.addEventListener("click", destroyBoxes);

