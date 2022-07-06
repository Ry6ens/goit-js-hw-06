const textColor = document.querySelector(".color");
const colorBtn = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");

colorBtn.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  let setColor = (bodyColor.style.background = `#${Math.floor(
    Math.random() * 16777215
  )
    .toString(16)
    .padStart(6, 0)}`);

  textColor.textContent = setColor;
}
