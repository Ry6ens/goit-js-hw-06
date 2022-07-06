const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const randomBoxes = document.querySelector("#boxes");
const controlInput = document.querySelector("#controls input");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = () => {
  const amount = Number(controlInput.value);
  const basicSize = 30;

  for (let i = 0; i < amount; i++) {
    const size = basicSize + i * 10;
    const elemDiv = document.createElement("div");
    elemDiv.style.width = `${size}px`;
    elemDiv.style.height = `${size}px`;
    elemDiv.style.background = getRandomHexColor();
    randomBoxes.append(elemDiv);
  }
};

const removeBoxes = () => {
  randomBoxes.innerHTML = "";
};

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", removeBoxes);
