const textInput = document.querySelector("#name-input");
const outPut = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value;
  outPut.textContent = inputValue.length === 0 ? "Anonymous" : inputValue;
});
