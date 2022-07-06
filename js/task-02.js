const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

for (let i = 0; i < ingredients.length; i++) {
  const listItem = document.querySelector("#ingredients");
  const item = document.createElement("li");
  listItem.append(item);
  item.classList.add("item");
  item.textContent = ingredients[i];
}

// const board = document.querySelector("#board");
// const SQUARES_NUMBER = 450;
// const colors = ["red", "blue", "green", "yellow"];

// for (let i = 0; i < SQUARES_NUMBER; i += 1) {
//   const square = document.createElement("div");
//   square.classList.add("square");

//   square.addEventListener("mouseover", () => setColor(square));

//   square.addEventListener("mouseleave", () => removeColor(square));

//   board.append(square);
// }

// function setColor(el) {
//   const color = getRandomColor();
//   el.style.backgroundColor = color;
//   el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
// }

// function removeColor(el) {
//   el.style.backgroundColor = "#1d1d1d";
//   el.style.boxShadow = `0 0 2px #000`;
// }

// function getRandomColor() {
//   return colors[Math.floor(Math.random() * colors.length)];
// }
