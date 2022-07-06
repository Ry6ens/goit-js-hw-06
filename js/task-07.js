const sizeControl = document.querySelector("#font-size-control");
const sizeText = document.querySelector("#text");

sizeControl.addEventListener("input", function () {
  sizeText.style.fontSize = this.value + "px";
});
