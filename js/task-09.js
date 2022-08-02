"use strict";
  const body = document.querySelector('body')
  const button = document.querySelector(".change-color");
  const span = document.querySelector(".color");
  

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
const background = () => {
  // body.classList.add('body')
  body.style.cssText =`background-color: ${getRandomHexColor()};`;
  span.innerText = getRandomHexColor();
}

button.addEventListener("click", background);

