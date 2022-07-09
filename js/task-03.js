"use strict";
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const items = document.querySelector(".gallery");
console.log(items);
const imgLists = images
  .map(
    (image) =>
      `<li class="gallery__item"><img class="gallery__img" src="${image.url}" alt="${image.alt}"></li>`
  )
  .join(" ");
console.log(imgLists);
items.innerHTML = imgLists;

const gallery = document.querySelector(".gallery");
gallery.style.cssText = `
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-bottom: -20px;
  `;

const galleryItems = document.querySelectorAll(".gallery__item");
for (var i = 0, length = galleryItems.length; i < length; i++) {
  galleryItems[i].style.marginBottom = "20px";
}

const galleryImgs = document.querySelectorAll(".gallery__img");
for (var i = 0, length = galleryImgs.length; i < length; i++) {
  galleryImgs[i].style.cssText = `
  margin: 0 auto;
  width: 100%;
  height: 100%;
  `;
}
