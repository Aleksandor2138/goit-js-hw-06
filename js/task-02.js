"use strict";
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const items = document.querySelector("#ingredients");
console.log(items);
for (const ingredient of ingredients) {
  const lists = document.createElement("li");
  lists.classList.add("item");
  lists.textContent = ingredient;
  console.log(lists);
  items.after(lists);
}
// console.log(lists);
// items.innerHTML =lists;
// const ingredientsLists = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join(' ');
// console.log(ingredientsLists);
// items.innerHTML = ingredientsLists;