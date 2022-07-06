const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const randomBoxes = document.querySelector("#boxes");
const controlInput = document.querySelector("#controls");

controlInput.addEventListener("input", (el) => console.log(el));

function createBoxes(amount) {}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
