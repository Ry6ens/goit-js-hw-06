const textInput = document.querySelector("#validation-input");
const textLength = document.querySelector('[data-length="6"]');
console.log(textLength.dataset.length);

textInput.addEventListener("blur", (event) => {
  const inputValue = event.currentTarget.value;
  if (inputValue.length < textLength.dataset.length) {
    textInput.classList.add("invalid");
    return;
  }
  textInput.classList.remove("invalid");
  textInput.classList.add("valid");
});
