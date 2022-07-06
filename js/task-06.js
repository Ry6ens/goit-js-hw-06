const textInput = document.querySelector("#validation-input");
const textLength = document.querySelector('[data-length="6"]');

textInput.addEventListener("blur", (event) => {
  const inputValue = event.currentTarget.value;

  if (inputValue.length === Number(textLength.dataset.length)) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
});
