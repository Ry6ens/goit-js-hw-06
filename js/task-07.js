const sizeControl = document.querySelector("#font-size-control");
const sizeText = document.querySelector("#text");

sizeControl.addEventListener("input", function (event) {
  sizeText.style.fontSize = event.target.value + "px";
});
