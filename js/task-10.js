"use strict";
const input = document.querySelector("#controls input");
const createboxBtn = document.querySelector("[data-create]");
const deleteboxBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputChange = (e) => {
  input.setAttribute("count", Number(e.currentTarget.value));
  console.log(Number(e.currentTarget.value));
};
input.addEventListener("input", inputChange);

let baseboxSize = 30;

const createbox = () => {
  let countBox = Number(input.getAttribute("count"));
  console.log(countBox);
  for (let i = 0; i < countBox; i++) {
    baseboxSize += 10;
    const newBox = document.createElement("div");
    newBox.style.background = getRandomHexColor();
    newBox.style.height = baseboxSize + "px";
    newBox.style.width = baseboxSize + "px";
    newBox.style.margin = "10px";
    newBox.classList.add("new-box");
    boxes.append(newBox);
  }
};

createboxBtn.addEventListener("click", createbox);

const deletebox = () => {
  const allNewBoxes = document.querySelectorAll(".new-box");
  for (let allNewBoxe of allNewBoxes) {
    boxes.removeChild(allNewBoxe);
  }
  baseboxSize = 30;
  event.currentTarget.reset();
};

deleteboxBtn.addEventListener("click", deletebox);