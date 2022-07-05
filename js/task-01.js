const ulTotal = document.querySelectorAll('.item');
console.log(`Number of categories: ${ulTotal.length}`);
// console.log(ulTotal);

const headers = [...ulTotal].map((header) => `Category: ${header.children[0].textContent} 
Elements: ${header.children[1].children.length}`
).join("\n");
console.log(headers)
